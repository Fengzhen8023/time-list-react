import React from 'react'
import LoginHome from 'views/loginHome/LoginHome'
import Recode from 'views/recode/Recode'

import 'css/init.css'

class App extends React.Component {
    render(){
        return (
            <div className="app-box">
               {/* <LoginHome /> */}
               <Recode />
            </div> 
        );
    }
}

export default App;