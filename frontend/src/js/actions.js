export const ADD_GOTO = 'ADD_GOTO'
export const RECEIVE_GOTOS = 'RECEIVE_GOTOS'

export const addGoto = (skill, handle) => ({
  type: ADD_GOTO,
  id: new Date().getTime(),
  skill,
  handle
})

const receiveGotos = (reddit, json) => ({
    type: RECEIVE_POSTS,
    reddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
})

export const fetchGotos = username => dispatch => {
  return fetch(`/api/${username}`)
    .then(response => response.json())
    .then(json => dispatch(receiveGotos(username, json)))
}
