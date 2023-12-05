// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package entity

import (
	"github.com/donknap/dpanel/common/accessor"
)

const TableNameSite = "ims_site"

// Site mapped from table <ims_site>
type Site struct {
	ID            int32                             `gorm:"column:id;type:INTEGER" json:"id"`
	SiteName      string                            `gorm:"column:site_name;type:text" json:"siteName"`
	SiteURL       string                            `gorm:"column:site_url;type:text" json:"siteUrl"`
	SiteID        string                            `gorm:"column:site_id;type:text" json:"siteId"`
	ContainerID   int32                             `gorm:"column:container_id;type:integer" json:"containerId"`
	SiteURLExt    *accessor.SiteUrlExtOption        `gorm:"column:site_url_ext;type:text;serializer:json" json:"siteUrlExt"`
	Env           *accessor.SiteEnvOption           `gorm:"column:env;type:text;serializer:json" json:"env"`
	Status        int32                             `gorm:"column:status;type:integer" json:"status"`
	Type          int32                             `gorm:"column:type;type:integer" json:"type"`
	ContainerInfo *accessor.SiteContainerInfoOption `gorm:"column:container_info;type:text" json:"containerInfo"`
	Container     *Container                        `gorm:"foreignKey:container_id;references:id" json:"container"`
}

// TableName Site's table name
func (*Site) TableName() string {
	return TableNameSite
}
