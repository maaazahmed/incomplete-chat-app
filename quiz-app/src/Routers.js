import React, { Component } from 'react';
import { Router, Route } from "react-router-dom"
import SignUp from "./components/singUp"
import LogInComponent from "./components/login"
import history from "./History"
import MainComponent from "./components/Quiz_component"
// import MainChatComponent from "./components/chatRoom"

class Routers extends Component{
    render(){
       return(
         <Router history={history}>
            <div>
              <Route exact path="/" component={SignUp} />
              <Route exact path="/login" component={LogInComponent} />
              <Route exact path="/Quiz_component" component={MainComponent} />
             </div>
         </Router>
       )
    }
    
}


export default Routers