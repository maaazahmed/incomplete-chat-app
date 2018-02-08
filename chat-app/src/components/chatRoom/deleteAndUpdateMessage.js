import React,{Component} from "react"
import firebase from "firebase"
import { connect } from "react-redux"
import "../chat.css"
import { senMsgOnFirebase, renderMsgsAction , flageAction } from "../../store/action/action"



let database = firebase.database().ref("/")
class CreateMsgComponent extends Component{
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


  deleteMSG(id, indNum){
    database.child(`massege/${id}`).remove()
    // console.log(this.props.masseges.allMesseges)
    let msgArr = this.props.masseges.allMesseges;
    let deletedMessage = msgArr.splice(indNum,1)
    this.props.renderMsgs(deletedMessage)
  }

 editMSG(id, indNum){
    // database.child(`massege/${id}`).update()
    // console.log(this.props.masseges.allMesseges)
    // let msgArr = this.props.masseges.deleteAngUpdateFlage;
    // console.log(indNum,"+++",id)

    let objOfIndexAndId = {
      id:id,
      indNum:indNum
    }
    this.props.flageChack(objOfIndexAndId)
    // let msgArr = this.props.masseges.deleteAngUpdateFlage;
    // console.log(msgArr)
    // let deletedMessage = msgArr.splice(indNum,1)
    // this.props.renderMsgs(deletedMessage)

  }




    render(){
      return(  
        <div className="Edit_delete_style">
           <button
           className="btn btn-primary text-primary bg-white" onClick={this.deleteMSG.bind(this,this.props.massgeVal.id, this.props.indexNum)}><i className="fa fa-trash-o"></i></button> 
           <button 
           className="btn btn-primary text-primary bg-white" onClick={this.editMSG.bind(this,this.props.massgeVal.id, this.props.indexNum)}><i className="fa fa-edit"></i></button> 
        </div>   
      )
    }
}

const mapStateToProps = (state)=>{
  return ({
        masseges:state.root,
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
      renderMsgs:(msg)=>{dispatch(renderMsgsAction(msg))},
      flageChack:(obj)=>{dispatch(flageAction(obj))},
  })
}

export default connect(mapStateToProps,mapDispatchToProps) (CreateMsgComponent)