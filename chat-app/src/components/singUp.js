import React from 'react';
import '../App.css';
import {signupAction} from "../store/action/action"
import {connect} from 'react-redux'
import { Link } from "react-router-dom"
import LogInComponent from "./login"

class SignUp extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.signUpHandler = this.signUpHandler.bind(this);

    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  handleChange(e) {
    this.setState({ 
        [e.target.name]:e.target.value
     });
  }

  signUpHandler(){
    let user = {
       username: this.state.username, 
       email: this.state.email, 
       password: this.state.password, 
    } 
    // console.log(this.user)
    this.props.signupwithEmailPassword(user)
  }

  render() {
    return (
     <div> 
        <div className="col-md-4 form-div">
        <h1>SignUp</h1>
          <input type="text"
            name="username"
             value={this.state.username}
             onChange={this.handleChange} className="form-control"
             placeholder="Username" />
             <br />
             
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
              onClick={this.signUpHandler}>SignUp</button>
              <Link to="./login" >Already have an account</Link>
        </div>     
      </div>     
      
    );
  }
}
function mapStateToProp(state) {
  return ({
      // userName: state.root.userName
  })
}

function mapDispatchToProp(dispatch) {
  return ({
      signupwithEmailPassword: (userDetails)=>{
          dispatch(signupAction(userDetails));
      }
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(SignUp);

