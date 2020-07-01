import React from 'react';
import LeftSideBar from 'components/leftSideBar/LeftSideBar';

import './Content.scss';

const Content = () => {

  return (
    <div className="content-page">
      <div className="left-side-bar">
        <LeftSideBar />
      </div>
      <div className="right-side-content"></div>
    </div>
  );
}

export default Content;