import React from 'react';
import LeftSideBar from 'components/leftSideBar/LeftSideBar';
import ContentHeader from 'components/contentHeader/ContentHeader';

import './Content.scss';

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
        <div className="right-body"></div>


      </div>
    </div>
  );
}

export default Content;