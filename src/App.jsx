import React from 'react'
import LoginHome from 'views/loginHome/LoginHome'
import Record from 'views/record/Record'

import 'css/init.css'

class App extends React.Component {
    render(){
        return (
            <div className="app-box">
               {/* <LoginHome /> */}
               <Record />
            </div> 
        );
    }
}

export default App;