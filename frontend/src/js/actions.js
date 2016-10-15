import 'whatwg-fetch'

export const ADD_GOTO = 'ADD_GOTO'
export const RECEIVE_GOTOS = 'RECEIVE_GOTOS'
export const RECEIVE_USER = 'RECEIVE_USER'
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE'

export const addGoto = (skill, handle) => ({
  type: ADD_GOTO,
  id: new Date().getTime(),
  skill,
  handle
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
  return fetch(`/api/${username}`)
    .then(response => response.json())
    .then(json => {
      dispatch(receiveProfile(json))
      if (json.gotos) {
        dispatch(receiveGotos(json.gotos))
      }
    })
}

export const fetchCurrentUser = () => dispatch => {
  // make sure to pass delicious cookies
  return fetch('/api/current_user', { credentials: 'include' })
    .then(resp => resp.json())
    .then(json => dispatch({
        type: RECEIVE_USER,
        user: json
    }))
}
