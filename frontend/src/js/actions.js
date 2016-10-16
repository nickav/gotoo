import $ from './http'

export const ADD_GOTO = 'ADD_GOTO'
export const RECEIVE_GOTOS = 'RECEIVE_GOTOS'
export const RECEIVE_USER = 'RECEIVE_USER'
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE'

export const addGoto = (skill, handle) => ({
  type: ADD_GOTO,
  goto: {
    id: new Date().getTime(),
    skill,
    handle
  }
})

const receiveGotos = (gotos) => ({
  type: RECEIVE_GOTOS,
  gotos,
  receivedAt: Date.now()
})

const receiveProfile = (profile) => ({
  type: RECEIVE_PROFILE,
  profile,
  receivedAt: Date.now()
})

export const fetchGotos = (username) => dispatch => {
  return $.get(`/api/users/${username}`)
    .then(json => {
      console.log(json)
      dispatch(receiveProfile(json))
      if (json.gotos) {
        dispatch(receiveGotos(json.gotos))
      }
    })
}

const createGoto = (user_id, goto) => dispatch => {
  return $.post(`/api/users/${user_id}/gotos`, { body: goto })
    .then(json => {
      console.log(json)
    })
}

const updateGoto = (user_id, goto) => dispatch => {
  return $.put(`/api/users/${user_id}/gotos/${goto.id}`, { body: goto })
    .then(json => {
      console.log(json)
    })
}

export const saveGoto = (user_id, goto) => dispatch => {
  if (goto.id) {
    return updateGoto(user_id, goto)
  }
  return createGoto(user_id, goto)
}
window.saveGoto = saveGoto

export const deleteGoto = (user_id, goto) => dispatch => {
  return $.delete(`/api/users/${user_id}/gotos/${goto.id}`)
    .then(json => {
      console.log(json)
    })
}

export const fetchCurrentUser = () => dispatch => {
  // make sure to pass delicious cookies
  return $.get('/api/current_user')
    .then(json => dispatch({
        type: RECEIVE_USER,
        user: json
    }))
}
