import {combineReducers} from "redux";
import task from './task/reducer'
import user from './user/reducer'

const combinedStore = combineReducers({
  task,
  user
})

export default combinedStore
