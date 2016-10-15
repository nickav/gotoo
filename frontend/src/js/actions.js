import 'whatwg-fetch'

export const ADD_GOTO = 'ADD_GOTO'
export const RECEIVE_GOTOS = 'RECEIVE_GOTOS'
export const RECEIVE_USER = 'RECEIVE_USER'

export const addGoto = (skill, handle) => ({
  type: ADD_GOTO,
  id: new Date().getTime(),
  skill,
  handle
})

const receiveGotos = (username, json) => ({
  type: RECIEVE_GOTOS,
  gotos: json.gotos,
  username,
  receivedAt: Date.now()
})

export const fetchGotos = username => dispatch => {
  return fetch(`/api/${username}`)
    .then(response => response.json())
    .then(json => dispatch(receiveGotos(username, json)))
}

export const fetchCurrentUser = _ => dispatch => {
  // make sure to pass delicious cookies
  return fetch('/api/current_user', { credentials: 'include' })
    .then(resp => resp.json())
    .then(json => dispatch({
        type: RECEIVE_USER,
        user: json
    }))
}
