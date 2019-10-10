import React from 'react'
import Login from 'views/login/Login'

import './asset/css/init.css'

class App extends React.Component {
    render(){
        return (
            <div className="app-box">
               <Login />
            </div> 
        );
    }
}

export default App;