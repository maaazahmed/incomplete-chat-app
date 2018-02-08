import reducer from "./reducer"
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
   root:reducer
})

export default rootReducer