import { combineReducers } from 'redux'
import {
  ADD_GOTO,
  EDIT_GOTO,
  DELETE_GOTO,
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
    case EDIT_GOTO:
      const edits = action.goto
      return state.map(goto => {
        if (goto.id == edits.id) {
          return Object.assign({}, goto, edits)
        }
        return goto
      })
    case DELETE_GOTO:
      const remove = action.goto
      return state.filter(goto => {
        return goto.id != remove.id
      })
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
