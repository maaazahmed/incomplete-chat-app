import React,{Component} from "react"
import firebase from "firebase"
import { connect } from "react-redux"
import "../chat.css"
import { senMsgOnFirebase, renderMsgsAction, cecaleAction } from "../../store/action/action"

let database = firebase.database().ref("/")

class UpdateMsgComponent extends Component{
  constructor(){
    super()
    this.state={
      textarea:""
    }
  }

  changeHnlr(ev){
    this.setState({
      textarea:ev.target.value
    })
  }

    updateMSG(id, indexNumber){
      let newMsg = this.state.textarea
      let newArr = this.props.msgArr.allMesseges[indexNumber].msseges =this.state.textarea
      this.props.renderMsgs(newArr)
      let saveOnbDB = this.props.msgArr.allMesseges[indexNumber]
      database.child(`massege/${id}`).update(saveOnbDB)
      this.props.cecaleBtutton(false)
      this.setState({
        textarea:""
      })

    }
    cancel(){
      this.props.cecaleBtutton(false)
      this.setState({
        textarea:""
      })
    }
    
    render(){
      return(  
        <div className="chat_Input_main">
           <div className="row chat_Input">
             <input type="text" className="form-control col-md-8 input"
             value={this.state.textarea}             
             placeholder ="Update Message" onChange={this.changeHnlr.bind(this)}/>
            
              <button
                onClick={
                  this.updateMSG
                  .bind(this,
                    this.props.MessageIdAndIndexNum.indexAndId.id,
                    this.props.MessageIdAndIndexNum.indexAndId.indNum
                  )
                }
                 className="btn btn-primary text-primary bg-white">
                 <i className="fa fa-edit">
                </i></button> 

              <button
                onClick={this.cancel.bind(this)}
               className="btn btn-primary text-primary bg-white">
               <i className="fa fa-times-circle">
               </i></button> 
              
           </div>
        </div>   
      )
    }
}

const mapStateToProps = (state)=>{
  return ({
        MessageIdAndIndexNum:state.root,
        msgArr:state.root
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
    senMsgOnAction:(msseges)=>{dispatch(senMsgOnFirebase(msseges))},
    renderMsgs:(msg)=>{dispatch(renderMsgsAction(msg))},
    cecaleBtutton:(fa)=>{dispatch(cecaleAction(fa))},
  })
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateMsgComponent)