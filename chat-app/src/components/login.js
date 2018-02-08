import React, { Component } from 'react';
import '../App.css';
import Bootstrap from "bootstrap/dist/css/bootstrap.css"
import {connect} from 'react-redux'
import { logInAction } from "../store/action/action"
import { Link }  from "react-router-dom"
import SignUp from "./singUp"


class LogInComponent extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.logInHandler = this.logInHandler.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange(e) {
    this.setState({ 
        [e.target.name]:e.target.value
     });
  }

  logInHandler(){
    let user = {
       email: this.state.email, 
       password: this.state.password, 
    } 
   
    
    this.props.sinInwithEmailPassword(user)
    this.setState({ 
      email: '',
      password: '',
   });
  }

  render() {
    return (
     <div> 
        <div className="col-md-4 form-div">
        <h1>LogIn</h1>
         
             
          <input type="email"
           name="email"
            value={this.state.email}
             onChange={this.handleChange} className="form-control"
             placeholder="Email" />
             <br />
          
          <input type="password"
           name="password"
            value={this.state.password}
             onChange={this.handleChange} className="form-control" 
             placeholder="Password" />
             <br />

             <button type="button"
              className="btn btn-outline-primary btn-block"
               onClick={this.logInHandler} >LogIn</button>
              <Link to="/" >Creacte an account</Link>
        </div>     
      </div>     
      
    );
  }
}
function mapStateToProp(state) {
  return ({})
}

function mapDispatchToProp(dispatch) {
  return ({
      sinInwithEmailPassword: (userLgin)=>{
          dispatch(logInAction(userLgin));
      }
  })
}

export default connect(mapStateToProp, mapDispatchToProp) (LogInComponent);

