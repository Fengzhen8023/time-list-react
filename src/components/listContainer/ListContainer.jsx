import React from 'react';
import { StarFilled, MenuOutlined, PlusOutlined, CheckOutlined } from '@ant-design/icons';

import './ListContainer.scss';

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
          <MenuOutlined onClick={modifyCurrentListContainer} />
        </div>
      </div>


      <div className="add-new-item" onClick={addNewItem}>
        <PlusOutlined className="icon" />
        <span className="place-holder">添加新事项</span>
      </div>

      <ul className="list-content">
        {renderList(listData)}
      </ul>


    </div>
  );
}

export default ListContainer;