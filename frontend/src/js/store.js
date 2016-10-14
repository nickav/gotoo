import { combineReducers, createStore } from 'redux'
import { ADD_GOTO } from './actions'

const gotos = (state = [], action) => {
  switch (action.type) {
    case ADD_GOTO:
      return state.concat({
        id: new Date().getTime(),
        handle: '',
        name: '',
        skill: ''
      })
    default:
      return state
  }
}

export default createStore(combineReducers({
  gotos
}))
