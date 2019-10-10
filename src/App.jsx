import React from 'react'
import LoginHome from 'views/loginHome/LoginHome'

import 'css/init.css'

class App extends React.Component {
    render(){
        return (
            <div className="app-box">
               <LoginHome />
            </div> 
        );
    }
}

export default App;