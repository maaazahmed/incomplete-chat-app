import React,{Component} from "react"
import firebase from "firebase"
import { connect } from "react-redux"
import "../chat.css"
import Bootstrap from "bootstrap/dist/css/bootstrap.css"
import  DeleteAndUpdateComponent  from "./deleteAndUpdateMessage"



let database = firebase.database().ref("/")
class RenderMassegeComponent extends Component{
    render(){
      // console.log(this.props)
      return(  
           <div>
             {/* <h2>{this.props.IDs.chaters.name}</h2> */}
             <div>
                 {this.props.masseges.allMesseges.map((val, ind)=>{
                  
                  return(  
                      <div key={ind} className="main_chat_div">  
                       {((val.senderID === this.props.IDs.chaters.senderID && val.receverID === this.props.IDs.chaters.receverID)
                        ||
                       (this.props.IDs.chaters.receverID === val.senderID   &&  this.props.IDs.chaters.senderID=== val.receverID) )?
                        <div>
                       {((this.props.IDs.chaters.receverID === val.senderID   &&  this.props.IDs.chaters.senderID=== val.receverID)
                        ||
                       (this.props.IDs.chaters.receverID === val.senderID   &&  this.props.IDs.chaters.senderID=== val.receverID) )?
                          <div className="">
                             <div className="card text-white bg-primary  receved_message">
                             <div className="card-block">
                               {val.msseges} 
                             </div>
                            </div>
                          </div>
                          :
                          <div className="">
                           <div className="card text-black bg-light send_message">
                             <div className="card-block">
                               {val.msseges} 
                               <DeleteAndUpdateComponent massgeVal={val} indexNum={ind}/>
                              </div>
                            </div>
                           
                          </div>
                          }
                        </div>
                            :null
                            }                            
                      </div> 
                  )
                 })}
             </div>
           </div>
      )
    }
}

const mapStateToProps = (state)=>{
  return ({
        masseges:state.root,
        IDs:state.root
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
  
  })
}

export default connect(mapStateToProps,mapDispatchToProps) (RenderMassegeComponent)