import {combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux'
import jumbotron from './jumbotron-reducer'

export default combineReducers({
  jumbotron,
  routing: routerReducer
})