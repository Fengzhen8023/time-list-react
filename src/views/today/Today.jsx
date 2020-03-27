import React from 'react';
import Sidebar from 'components/sidebar/Sidebar';
import TodayContent from 'components/todayContent/TodayContent';
import './Today.scss';

class Today extends React.Component {

    render() {
        return (
            <div className="today-page">
                <div className="sidebar-part">
                    <Sidebar />
                </div>
                <div className="today-part">
                    <TodayContent />
                </div>
            </div>
        )
    }
}

export default Today;