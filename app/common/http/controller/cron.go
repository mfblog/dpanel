package controller

import (
	"errors"
	"github.com/donknap/dpanel/app/common/logic"
	"github.com/donknap/dpanel/common/accessor"
	"github.com/donknap/dpanel/common/dao"
	"github.com/donknap/dpanel/common/entity"
	"github.com/donknap/dpanel/common/service/crontab"
	"github.com/gin-gonic/gin"
	"github.com/robfig/cron/v3"
	"github.com/we7coreteam/w7-rangine-go/v2/pkg/support/facade"
	"github.com/we7coreteam/w7-rangine-go/v2/src/http/controller"
	"time"
)

type Cron struct {
	controller.Abstract
}

func (self Cron) Create(http *gin.Context) {
	type ParamsValidate struct {
		Id             int32                            `json:"id"`
		Title          string                           `json:"title" binding:"required"`
		Expression     []accessor.CronSettingExpression `json:"expression" binding:"required"`
		ContainerName  string                           `json:"containerName"`
		Script         string                           `json:"script" binding:"required"`
		Environment    []accessor.EnvItem               `json:"environment"`
		EnableRunBlock bool                             `json:"enableRunBlock"`
		KeepLogTotal   int                              `json:"keepLogTotal"`
	}
	params := ParamsValidate{}
	if !self.Validate(http, &params) {
		return
	}

	allExpression := make([]string, 0)
	for _, expression := range params.Expression {
		allExpression = append(allExpression, expression.ToString())
	}
	err := crontab.Wrapper.CheckExpression(allExpression)
	if err != nil {
		self.JsonResponseWithError(http, err, 500)
		return
	}

	var taskRow *entity.Cron
	if params.Id > 0 {
		taskRow, _ = dao.Cron.Where(dao.Cron.ID.Eq(params.Id)).First()
		if taskRow == nil {
			self.JsonResponseWithError(http, errors.New("任务不存在"), 500)
			return
		}
		crontab.Wrapper.RemoveJob(taskRow.Setting.JobIds...)

		taskRow.Setting.NextRunTime = make([]time.Time, 0)
		taskRow.Setting.JobIds = make([]cron.EntryID, 0)
		taskRow.Setting.Expression = params.Expression
		taskRow.Setting.Script = params.Script
		taskRow.Setting.ContainerName = params.ContainerName
		taskRow.Setting.EnableRunBlock = params.EnableRunBlock
		taskRow.Setting.Environment = params.Environment
		taskRow.Setting.KeepLogTotal = params.KeepLogTotal
	} else {
		if _, err := dao.Cron.Where(dao.Cron.Title.Like(params.Title)).First(); err == nil {
			self.JsonResponseWithError(http, errors.New("任务名称已经存在"), 500)
			return
		}
		taskRow = &entity.Cron{
			Title: params.Title,
			Setting: &accessor.CronSettingOption{
				NextRunTime:    make([]time.Time, 0),
				Expression:     params.Expression,
				ContainerName:  params.ContainerName,
				Script:         params.Script,
				JobIds:         make([]cron.EntryID, 0),
				EnableRunBlock: params.EnableRunBlock,
				Environment:    params.Environment,
				KeepLogTotal:   params.KeepLogTotal,
			},
		}
		err = dao.Cron.Create(taskRow)
	}

	jobIds, err := logic.Cron{}.AddJob(taskRow)
	if err == nil {
		taskRow.Setting.NextRunTime = crontab.Wrapper.GetNextRunTime(jobIds...)
		taskRow.Setting.JobIds = jobIds
	}
	_, _ = dao.Cron.Updates(taskRow)

	if err != nil {
		self.JsonResponseWithError(http, err, 500)
		return
	}
	self.JsonSuccessResponse(http)
	return
}

func (self Cron) GetList(http *gin.Context) {
	type ParamsValidate struct {
		Title    string `json:"title"`
		Page     int    `form:"page,default=1" binding:"omitempty,gt=0"`
		PageSize int    `form:"pageSize" binding:"omitempty"`
	}
	params := ParamsValidate{}
	if !self.Validate(http, &params) {
		return
	}
	if params.Page < 1 {
		params.Page = 1
	}
	if params.PageSize < 1 {
		params.PageSize = 10
	}
	query := dao.Cron.Order(dao.Cron.ID.Desc())
	if params.Title != "" {
		query.Where(dao.Cron.Title.Like("%" + params.Title + "%"))
	}
	list, total, _ := query.FindByPage((params.Page-1)*params.PageSize, params.PageSize)
	self.JsonResponseWithoutError(http, gin.H{
		"total": total,
		"page":  params.Page,
		"list":  list,
	})
	return
}

func (self Cron) Delete(http *gin.Context) {
	type ParamsValidate struct {
		Id []int32 `json:"id" binding:"required"`
	}
	params := ParamsValidate{}
	if !self.Validate(http, &params) {
		return
	}
	if list, err := dao.Cron.Where(dao.Cron.ID.In(params.Id...)).Find(); err == nil {
		for _, item := range list {
			crontab.Wrapper.RemoveJob(item.Setting.JobIds...)
			_, _ = dao.Cron.Delete(item)
		}
	}
	self.JsonSuccessResponse(http)
	return
}

func (self Cron) GetLogList(http *gin.Context) {
	type ParamsValidate struct {
		Id       int32 `json:"id" binding:"required"`
		Page     int   `form:"page,default=1" binding:"omitempty,gt=0"`
		PageSize int   `form:"pageSize" binding:"omitempty"`
	}
	params := ParamsValidate{}
	if !self.Validate(http, &params) {
		return
	}
	if params.Page < 1 {
		params.Page = 1
	}
	if params.PageSize < 1 {
		params.PageSize = 10
	}
	query := dao.CronLog.Order(dao.CronLog.ID.Desc()).Where(dao.CronLog.CronID.Eq(params.Id))
	list, total, _ := query.FindByPage((params.Page-1)*params.PageSize, params.PageSize)
	self.JsonResponseWithoutError(http, gin.H{
		"total": total,
		"page":  params.Page,
		"list":  list,
	})
}

func (self Cron) PruneLog(http *gin.Context) {
	type ParamsValidate struct {
		Id int32 `json:"id" binding:"required"`
	}
	params := ParamsValidate{}
	if !self.Validate(http, &params) {
		return
	}

	oldRow, _ := dao.CronLog.Where(dao.CronLog.CronID.Eq(params.Id)).Last()
	_, _ = dao.CronLog.Where(dao.CronLog.ID.Lte(oldRow.ID)).Delete()
	db, err := facade.GetDbFactory().Channel("default")
	if err != nil {
		self.JsonResponseWithError(http, err, 500)
		return
	}
	db.Exec("vacuum")
	self.JsonSuccessResponse(http)
	return
}

func (self Cron) Template(http *gin.Context) {

}