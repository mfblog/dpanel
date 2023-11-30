package logic

import (
	"fmt"
	"github.com/donknap/dpanel/common/dao"
	"github.com/donknap/dpanel/common/entity"
)

func newStepMessage(siteId int32) *stepMessage {
	task := &stepMessage{}
	taskRow, _ := dao.Task.Where(dao.Task.SiteID.Eq(siteId)).First()
	if taskRow == nil {
		taskRow = &entity.Task{
			SiteID:  siteId,
			Status:  STATUS_STOP,
			Message: "",
		}
		dao.Task.Create(taskRow)
	}
	task.recordId = taskRow.ID
	return task
}

type stepMessage struct {
	progress    interface{} // 进度信息 json 格式
	currentStep string      // 当前进行的步骤
	error       error       // 发生的错误
	recordId    int32
}

// 记录任务错误
func (self *stepMessage) err(err error) {
	dao.Task.Where(dao.Task.ID.Eq(self.recordId)).Updates(
		entity.Task{
			Status:  STATUS_ERROR,
			Message: err.Error(),
		},
	)
	//状态同步到站点上
	self.syncSiteStatus(STATUS_ERROR)
}

// 更新任务进度
func (self *stepMessage) step(step string) {
	dao.Task.Where(dao.Task.ID.Eq(self.recordId)).Updates(
		entity.Task{
			Status: STATUS_PROCESSING,
			Step:   step,
		},
	)
	//状态同步到站点上
	self.syncSiteStatus(STATUS_PROCESSING)
}

func (self *stepMessage) process(data interface{}) {
	self.progress = data
}

func (self *stepMessage) GetProcess() interface{} {
	return self.progress
}

func (self *stepMessage) success() {
	query := dao.Task.Where(dao.Task.ID.Eq(self.recordId))
	query.Updates(
		entity.Task{
			Status:  STATUS_SUCCESS,
			Message: "",
		},
	)
	//状态同步到站点上
	self.syncSiteStatus(STATUS_SUCCESS)
}

func (self *stepMessage) syncSiteStatus(status int) {
	taskRow, _ := dao.Task.Where(dao.Task.ID.Eq(self.recordId)).First()
	_, err := dao.Site.Where(dao.Site.ID.Eq(taskRow.SiteID)).Update(dao.Site.Status, status)
	fmt.Printf("%v \n", taskRow)
	if err != nil {
		fmt.Printf("%s", err.Error())
	}
}