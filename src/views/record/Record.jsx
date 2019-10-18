import React from 'react';
import Sidebar from 'components/sidebar/Sidebar';
import RecordContent from 'components/recordContent/RecordContent';
import './Record.scss';

class Record extends React.Component {

    render() {
        return (
            <div className="record-page">
                <div className="sidebar-part">
                    <Sidebar />
                </div>
                <div className="record-part">
                    <RecordContent />
                </div>
            </div>
        )
    }
}

export default Record;