import React from 'react';
import LeftSideBar from 'components/leftSideBar/LeftSideBar';
import ContentHeader from 'components/contentHeader/ContentHeader';
import ListContainer from 'components/listContainer/ListContainer';

import './Content.scss';

const mockListData = [
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

const Content = () => {

  return (
    <div className="content-page">
      <div className="left-side-bar">
        <LeftSideBar />
      </div>
      <div className="right-side-content">
        <div className="right-header">
          <ContentHeader leftTitle="列表" isShowMiddleDate={true} isShowManager={true} />
        </div>
        <div className="right-body">
          <ListContainer listData={mockListData} listThemeColor="rgb(126, 123, 234)" />
          <ListContainer listData={mockListData} listThemeColor="rgb(27, 175, 174)" />
          <ListContainer listData={mockListData} listThemeColor="rgb(255, 113, 195)" />
          <ListContainer listData={mockListData} listThemeColor="rgb(22, 187, 235)" />
          <ListContainer listData={mockListData} listThemeColor="rgb(74, 140, 241)" />
        </div>
      </div>
    </div>
  );
}

export default Content;