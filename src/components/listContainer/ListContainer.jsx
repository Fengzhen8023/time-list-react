import React, { useState } from 'react';
import { Tooltip } from 'antd';
import { 
  StarFilled, MenuOutlined, PlusOutlined, CheckOutlined, SnippetsOutlined, HighlightOutlined, 
  LineHeightOutlined, ArrowRightOutlined, EyeOutlined, DeleteOutlined, ClockCircleOutlined,
  BookOutlined, CheckSquareOutlined, TagsOutlined 
} from '@ant-design/icons';

import './ListContainer.scss';
import 'css/common.scss';

const defaultListData = [
  {
    isFinished: true,
    name: "《蝇王》",
    itemGuid: "111"
  },
  {
    isFinished: false,
    name: "《沉思录》",
    itemGuid: "222"
  },
  {
    isFinished: false,
    name: "《如何阅读一本书》",
    itemGuid: "333"
  },
];

const ListContainer = ({ listThemeColor = "lightcoral", listData = defaultListData }) => {
  const [footerIconShow, setFooterIconShow] = useState(false);

  const addNewItem = () => {
    console.log("You click add new item button");
  }

  const showItemDetails = () => {
    console.log("Show item details");
  }

  const modifyCurrentListContainer = () => {
    console.log("You click the right icon");
  }

  const changeItemStatus = (e, status) => {
    if (status === 1) {
      console.log("Set item unfinished");
      e.stopPropagation();
      return false;
    }
    e.stopPropagation();
    console.log("Set item finished");
  }

  const renderList = (listRenderData) => {
    let listHtml = listRenderData.map(item => {
      if (item.isFinished) {
        return (
          <li onClick={showItemDetails} key={item.itemGuid}>
            <span
              style={{ borderColor: listThemeColor }}
              className="cirle-icon"
              onClick={e => { changeItemStatus(e, 1) }}>
            </span>
            <span className="item-name">{item.name}</span>
          </li>
        )
      }
      return (
        <li onClick={showItemDetails} key={item.itemGuid}>
          <CheckOutlined
            style={{ color: listThemeColor }}
            className="finish-icon"
            onClick={e => { changeItemStatus(e, 1) }} />
          <span className="item-name">{item.name}</span>
        </li>
      )
    });

    return listHtml;
  }

  const renderFooterIcon = () => {
    if (!footerIconShow) {
      return <></>
    }
    
    const footIconData = [
      {
        icon: <ClockCircleOutlined className="foot-action-icon" />,
        text: "时间",
        iconKey: "time"
      },
      {
        icon: <TagsOutlined className="foot-action-icon" />,
        text: "分类",
        iconKey: "type"
      },
      {
        icon: <BookOutlined className="foot-action-icon" />,
        text: "重要程度",
        iconKey: "importance"
      },
      {
        icon: <CheckSquareOutlined className="foot-action-icon" />,
        text: "完成",
        iconKey: "finish"
      },
      {
        icon: <DeleteOutlined className="foot-action-icon" />,
        text: "删除",
        iconKey: "delete"
      }
    ];

    return (
      <ul className="footer">
        {
          footIconData.map(footerIcon => (
            <li className="foot-action" key={footerIcon.iconKey} onClick={() => {handleClickFooterIcon(footerIcon.iconKey)}}>
              {footerIcon.icon}
              <p>{footerIcon.text}</p>
            </li>
          ))
        }
      </ul>
    )
  }

  const handleClickFooterIcon = (iconKey) => {
    console.log("You click ", iconKey);
  }

  const handleListMenuClick = (menuKey) => {
    switch(menuKey) {
      case "batchEdit":
        setFooterIconShow(true);
        console.log("进行批量编辑");
        break;
      case "editTypeTitle":
        console.log("进行修改分类标题");
        break;
      case "sortType":
        console.log("进行排序方式");
        break;
      case "moveToLast":
        console.log("进行移至最后面");
        break;
      case "hideType":
        console.log("进行隐藏此分类");
        break;
      case "deleteType":
        console.log("进行删除分类");
        break;
    }
  }

  const renderModifyListMenu = () => {
    const menuData = [
      {
        icon: <SnippetsOutlined className="menu-icon" />,
        text: "批量编辑事项",
        menuKey: "batchEdit"
      },
      {
        icon: <HighlightOutlined className="menu-icon" />,
        text: "修改分类标题",
        menuKey: "editTypeTitle"
      },
      {
        icon: <LineHeightOutlined className="menu-icon" />,
        text: "排序方式",
        menuKey: "sortType"
      },
      {
        icon: <ArrowRightOutlined className="menu-icon" />,
        text: "移至最后面",
        menuKey: "moveToLast"
      },
      {
        icon: <EyeOutlined className="menu-icon" />,
        text: "隐藏此分类",
        menuKey: "hideType"
      },
      {
        icon: <DeleteOutlined className="menu-icon" />,
        text: "删除分类",
        menuKey: "deleteType"
      },
    ];

    return (
      <ul className="menu-list">
        {
          menuData.map(menuItem => (
            <li key={menuItem.menuKey} onClick={() => {handleListMenuClick(menuItem.menuKey)}}>
              {menuItem.icon}
              <span className="menu-text">{menuItem.text}</span>
            </li>
          ))
        }
      </ul>
    );
  }

  return (
    <div className="list-container">
      <div className="header">
        <div
          style={{ color: listThemeColor }}
          className="left-icon" >
          <StarFilled />
          <span className="header-title">我的书单</span>
        </div>
        <div className="right-icon">
          <Tooltip
            title={renderModifyListMenu()}
            trigger="click"
            color="white"
            placement="bottom"
            mouseLeaveDelay={1}>
            <MenuOutlined onClick={modifyCurrentListContainer} />
          </Tooltip>
        </div>
      </div>


      <div className="add-new-item" onClick={addNewItem}>
        <PlusOutlined className="icon" />
        <span className="place-holder">添加新事项</span>
      </div>

      <ul className="list-content">
        {renderList(listData)}
      </ul>

      
      {renderFooterIcon()}


    </div>
  );
}

export default ListContainer;