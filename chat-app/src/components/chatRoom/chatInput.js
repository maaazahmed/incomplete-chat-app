import React,{Component} from "react"
import firebase from "firebase"
import { connect } from "react-redux"
import "../chat.css"
// import { renderUserList } from "../../store/action/action"
import { senMsgOnFirebase, renderMsgsAction } from "../../store/action/action"

let database = firebase.database().ref("/")

class CreateMsgComponent extends Component{
  constructor(){
    super()
    this.state={
      textarea:""
    }
  }

  componentWillMount(){
    database.child("massege").on("child_added",(snapshot)=>{
      let obj = snapshot.val()
      obj.id = snapshot.key
      // console.log(obj)
      this.props.renderMsgs(obj)
    })
  }

  changeHnlr(ev){
    this.setState({
      textarea:ev.target.value
    })
  }


  sendMsgHender(){
    // console.log(this.props.MessageId.lastMsgID)
if (this.state.textarea !== '') {
  let msseges = {
    msseges:this.state.textarea,
    senderID:this.props.chatersID.chaters.senderID,
    receverID:this.props.chatersID.chaters.receverID,
    // msagID:this.props.MessageId.lastMsgID
  }
  console.log(msseges)
  this.props.senMsgOnAction(msseges)
}

 else {
   alert("Peacr write something...!")
 }

  }
    render(){
      return(  
        <div className="chat_Input_main">
           <div className="row chat_Input">
             <input type="text" className="form-control col-md-8 input"
             value={this.state.textarea}             
             placeholder ="Type Message" onChange={this.changeHnlr.bind(this)}/>

             <button type="button"
              className="btn btn-primary text-primary bg-white"
               onClick={this.sendMsgHender.bind(this)}>
              Send</button>
           </div>
        </div>   
      )
    }
}

const mapStateToProps = (state)=>{
  return ({
        chatersID:state.root,
        MessageId:state.root,
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
    senMsgOnAction:(msseges)=>{dispatch(senMsgOnFirebase(msseges))},
    renderMsgs:(msg)=>{dispatch(renderMsgsAction(msg))},
  })
}

export default connect(mapStateToProps,mapDispatchToProps) (CreateMsgComponent)