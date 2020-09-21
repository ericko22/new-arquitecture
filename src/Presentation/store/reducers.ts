import {combineReducers} from "redux";
import task from './task/reducers'

const combinedStore = combineReducers({
  task
})

export default combinedStore
