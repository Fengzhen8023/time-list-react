import React from 'react';
import Sidebar from 'components/sidebar/Sidebar';
import PersonContent from 'components/personContent/PersonContent';
import './Person.scss';

class Person extends React.Component {

    render() {
        return (
            <div className="person-page">
                <div className="sidebar-part">
                    <Sidebar />
                </div>
                <div className="person-part">
                    <PersonContent />
                </div>
            </div>
        )
    }
}

export default Person;