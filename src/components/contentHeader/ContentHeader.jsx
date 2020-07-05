import React from 'react';
import moment from 'moment';
import { DatePicker, Switch } from 'antd';
import { AlignLeftOutlined } from '@ant-design/icons';

import './ContentHeader.scss';

const ContentHeader = ({ leftTitle = "列表", isShowMiddleDate = false, isShowManager = false }) => {

  const handleDatePickerChange = (date, dateString) => {
    console.log("data: ", date);
    console.log("dateString: ", dateString);
  }

  const renderMiddleDate = () => {
    if (isShowMiddleDate) {
      return (
        <DatePicker
          className="middle-date-picker"
          bordered={false}
          suffixIcon={""}
          defaultValue={moment()}
          inputReadOnly={true}
          allowClear={false}
          onChange={handleDatePickerChange} />
      );
    }
    return "";
  }

  const handleManageClick = () => {
    console.log("You click the handleManageClick button");
  }
  
  const hideSwitchChange = (checked) => {
    console.log(`Switch to ${checked}`)
  }

  const renderRight = () => {
    if (isShowManager) {
      return (
        <>
          <div className="show-manage" onClick={handleManageClick}>
            <AlignLeftOutlined />
            <span>展示管理</span>
          </div>
          <div className="hide-finished">
            <Switch size="small" onChange={hideSwitchChange} />
            <span>隐藏已完成</span>
          </div>
        </>
      )
    }
    return (
      <div className="hide-finished">
        <Switch size="small" />
        <span>隐藏已完成</span>
      </div>
    );
  }

  return (
    <div className="content-header">
      <div className="left">{leftTitle}</div>
      <div className="middle">{renderMiddleDate()}</div>
      <div className="right">{renderRight()}</div>
    </div>
  );
}

export default ContentHeader;