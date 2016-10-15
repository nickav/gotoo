import { combineReducers } from 'redux'
import { ADD_GOTO, RECEIVE_GOTOS, RECEIVE_USER } from './actions'

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

export default combineReducers({
  gotos,
  user
})
