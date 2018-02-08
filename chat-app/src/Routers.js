import React, { Component } from 'react';
import { Router, Route } from "react-router-dom"
import SignUp from "./components/singUp"
import LogInComponent from "./components/login"
import history from "./History"
import MainChatComponent from "./components/chatRoom"

class Routers extends Component{
    render(){
       return(
         <Router history={history}>
            <div>
              <Route exact path="/" component={SignUp} />
              <Route exact path="/login" component={LogInComponent} />
              <Route exact path="/MainChatComponent" component={MainChatComponent} />
             </div>
         </Router>
       )
    }
    
}


export default Routers