import React, { useState } from 'react';
import { SettingOutlined, SyncOutlined, DiffOutlined, AppstoreOutlined, CalendarOutlined, ContainerOutlined, InteractionOutlined, TableOutlined, ReconciliationOutlined, ScheduleOutlined } from '@ant-design/icons';
import { getImage } from 'components/utils/tools';
import { Collapse } from 'antd';
const { Panel } = Collapse;

import './LeftSideBar.scss';

const LeftSideBar = () => {
  const [userName, setUserName] = useState("小圣贤庄");

  const renderCollapseHeader = (icon, text) => {
    return (
      <div>
        {icon}
        <span>{text}</span>
      </div>
    );
  }

  const handleClickRightMenu = (menuKind) => {
    switch(menuKind) {
      case "all":
      case "schedule":
      case "list":
      case "repetition":
      case "myDay":
      case "myWeek":
      case "myMonth":
        console.log("The menu you click is: ", menuKind);
    }
  }

  const handleClickSetIcon = () => {
    console.log("You click set icon");
  }

  const handleClickRefreshIcon = () => {
    console.log("You click refresh icon");
  }
  
  return (
    <div className="left-side-bar-component">
      <div className="top-menu">
        <div className="user-info">
          <img className="avatar" src={getImage("login-user-avatar.jpg")} alt="login-user-avatar.jpg"/>
          <span className="user-name">{userName}</span>
        </div>
        <div className="top-menu-icon">
          <SettingOutlined className="icon" onClick={handleClickSetIcon} />
          <SyncOutlined className="icon" onClick={handleClickRefreshIcon} />
        </div>
      </div>
      
      <div className="matter collapse-container">
        <Collapse expandIconPosition="right" defaultActiveKey={['0', '1']}>
          <Panel header={renderCollapseHeader(<DiffOutlined className="heder-icon" />, "事项")}>
            <div className="option" onClick={ () => handleClickRightMenu("all") }>
              <AppstoreOutlined className="option-icon" />
              <span>全部</span>
            </div>
            <div className="option" onClick={ () => handleClickRightMenu("schedule") }>
              <CalendarOutlined className="option-icon" />
              <span>日程</span>
            </div>
            <div className="option" onClick={ () => handleClickRightMenu("list") }>
              <ContainerOutlined className="option-icon" />
              <span>清单</span>
            </div>
            <div className="option" onClick={ () => handleClickRightMenu("repetition") }>
              <InteractionOutlined className="option-icon" />
              <span>重复</span>
            </div>
          </Panel>
          <Panel header={renderCollapseHeader(<DiffOutlined className="heder-icon" />, "今日")}>
            <div className="option" onClick={ () => handleClickRightMenu("myDay") }>
              <ScheduleOutlined className="option-icon" />
              <span>我的一天</span>
            </div>
            <div className="option" onClick={ () => handleClickRightMenu("myWeek") }>
              <TableOutlined className="option-icon" />
              <span>我的一周</span>
            </div>
            <div className="option" onClick={ () => handleClickRightMenu("myMonth") }>
              <ReconciliationOutlined className="option-icon" />
              <span>我的一月</span>
            </div>
          </Panel>
        </Collapse>
      </div>

    </div>
  );
}

export default LeftSideBar;