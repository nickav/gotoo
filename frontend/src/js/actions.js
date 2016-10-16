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

export const fetchGotos = username => dispatch => {
  return $.get(`/api/users/${username}`)
    .then(json => {
      dispatch(receiveProfile(json))
      if (json.gotos) {
        dispatch(receiveGotos(json.gotos))
      }
    })
}

const createGoto = goto => (dispatch, getState) => {
  const user = getState().user
  return $.post(`/api/users/${user.id}/gotos`, { body: goto })
    .then(json => {
      console.log(json)
    })
}

const updateGoto = goto => (dispatch, getState) => {
  const user = getState().user
  return $.put(`/api/users/${user.id}/gotos/${goto.id}`, { body: goto })
    .then(json => {
      console.log(json)
    })
}

export const saveGoto = goto => {
  if (goto.created_at) {
    return updateGoto(goto)
  }
  return createGoto(goto)
}

export const deleteGoto = goto => (dispatch, getState) => {
  const user = getState().user
  return $.delete(`/api/users/${user.id}/gotos/${goto.id}`)
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
