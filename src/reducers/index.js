import { combineReducers } from 'redux'
import sayer from './sayer'
import header from './header'

const rootReducer = combineReducers({
  sayer,
  header,
})

export default rootReducer