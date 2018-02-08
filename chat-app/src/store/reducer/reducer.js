import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    users: [],
    chaters:[],
    allMesseges:[],
    deleteAngUpdateFlage:true,
    indexAndId:{}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.ALLUSERS:
        return({
            ...state,
            users :[...state.users,action.payload]
        })
        case ActionTypes.CHATERS:
        return({
            ...state,
            chaters:action.payload
        })

       
        case ActionTypes.LAST_MESSAGE_ID:
        return({
            ...state,
            lastMsgID:action.payload
        })
        case ActionTypes.FLAGE:
        return({
            ...state,
            indexAndId:action.payload,
            deleteAngUpdateFlage:false,
            
        })
        case ActionTypes.CANCEL:
        return({
            ...state,
            deleteAngUpdateFlage:true
        })
        case ActionTypes.MESSAGES:
        return({
            ...state,
            allMesseges:[...state.allMesseges,action.payload],
            deleteAngUpdateFlage:true
        })
        
        default:
            return state;
    }

}