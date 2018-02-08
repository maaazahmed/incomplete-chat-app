import React, { Component } from 'react';
// import './style/login_signup.css';
// import Bootstrap from "bootstrap/dist/css/bootstrap.css"
import {connect} from 'react-redux'
// import { Link }  from "react-router-dom"
// import SignUp from "./singUp"
// import { log_in_Action } from "../../store/action/action"



class MainComponent extends Component {
  

  render() {
    return (
     <div> 
       Home
      </div>     
      
    );
  }
}

const mapStateToProps = (state) =>{
  return ({
    })
 }
 

const mapDispatchToProps = (dispatch) =>{
 return ({
//    LogIn:(user)=>{
//      dispatch(log_in_Action(user))
//      }
   })
}


export default connect(mapStateToProps,mapDispatchToProps)(MainComponent);

