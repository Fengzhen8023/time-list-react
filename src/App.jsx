import React from 'react';
import LoginHome from 'views/loginHome/LoginHome';
import Record from 'views/record/Record';
import Today from 'views/today/Today';
import Person from 'views/person/Person';

import 'css/init.css';

class App extends React.Component {
    render(){
        return (
            <div className="app-box">
               {/* <LoginHome /> */}
               {/* <Record /> */}
               {/* <Today /> */}
               <Person />
            </div> 
        );
    }
}

export default App;