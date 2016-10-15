import { combineReducers } from 'redux'
import {
  ADD_GOTO,
  RECEIVE_GOTOS,
  RECEIVE_USER,
  RECEIVE_PROFILE
} from './actions'

const gotos = (state = [], action) => {
  switch (action.type) {
    case ADD_GOTO:
      return state.concat(action.goto)
    case RECEIVE_GOTOS:
      return action.gotos
    default:
      return state
  }
}

const user = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return action.user
    default:
      return state
  }
}

const profile = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PROFILE:
      return action.profile
    default:
      return state
  }
}

export default combineReducers({
  gotos,
  profile,
  user
})
