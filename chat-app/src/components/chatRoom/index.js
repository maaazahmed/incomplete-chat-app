import React,{Component} from "react"
import { connect } from "react-redux"
import UserListComponent from "./UserList"
import CreateMsgComponent from "./chatInput"
import RenderMassegeComponent  from "./messageComponent"
import UpdateMsgComponent  from "./UpdateMsg"

import "../chat.css"

class MainChatComponent extends Component{
    render(){
      // console.log(this.props.flage.deleteAngUpdateFlage)
       return( 
         <div className="main_div">
          {/* <div className="row"> */}

           <div className="chat_list">             
              <UserListComponent />
            </div>

            <div className="Msges_list">   
            <CreateMsgComponent />
            <br />

           {(this.props.flage.deleteAngUpdateFlage === false)?
            <UpdateMsgComponent />
            :  null }
            
            <br />
            <RenderMassegeComponent />            
            </div>

            <div className="msges_input">             
              {/* <CreateMsgComponent /> */}
            </div>

         {/* </div> */}
        </div>
       )
    }
}

// export default MainChatComponent
const mapStateToProps = (state)=>{
  return ({
        flage:state.root,
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
      // renderMsgs:(msg)=>{dispatch(renderMsgsAction(msg))},
  })
}

export default connect(mapStateToProps,mapDispatchToProps) (MainChatComponent)


