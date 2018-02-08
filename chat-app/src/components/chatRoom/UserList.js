import React,{Component} from "react"
import firebase from "firebase"
import { connect } from "react-redux"
import { renderUserList } from "../../store/action/action"
import { userIDs } from "../../store/action/action"

let database = firebase.database().ref("/")
class UserListComponent extends Component{
  constructor(){
    super()
    this.state= {
      flage:true
    }
    
    
  }

  // namess(){
  //  console.log(this)
  // }
  // namess()

  componentWillMount(){
    database.child("users").on("child_added",(snapshot)=>{
      let obj = snapshot.val()
      obj.id = snapshot.key
      snapshot.id = snapshot.key
      this.props.renderUserName(obj)
    })
  }

  selectUserForMsg(id,name){ 
    

    let senderID = firebase.auth().currentUser.uid; 
       let ID = {
         name:name,
         receverID:id,
         senderID:senderID
        }
        // console.log(senderID,"+++",id)
       this.props.userIDs(ID)
      }

    render(){
      
      // for(var i = 0; i <this.props.list.root.chaters.s;i++ ){
        
      // }


      // console.log(this.props.list.root.chaters.senderID === this.props.list.root.chaters.receverID)
      return(  
           <ul className="list-group" >
          <h2>{this.props.list.root.chaters.name}</h2>           
             {/* {console.log(this.props.list.root.chaters.senderID)} */}
               {this.props.list.root.users.map((val,ind)=>{  
                //  console.log(this.props.list.root.users.username)
                   return(
                    <div  key={ind}> 
                    {/* {(this.props.list.root.chaters.name !== this.props.list.root.chaters.username)? */}
                      <button type="button"
                        className="list-group-item list-group-item-action"
                        onClick={this.selectUserForMsg.bind(this,val.id,val.username)} >
                         {val.username}
                     </button>
                     {/* : null } */}
                    </div> 
                        ) 
                 })} 
           </ul>
      )
    }
}

const mapStateToProps = (state)=>{
  // console.log(state)
  return ({
        list:state
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
    renderUserName:(use)=>{dispatch(renderUserList(use))},
    userIDs:(sendObj)=>{dispatch(userIDs(sendObj))}
  })
}

export default connect(mapStateToProps,mapDispatchToProps) (UserListComponent)