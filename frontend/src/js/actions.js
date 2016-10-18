import $ from './dollar'

export const ADD_GOTO = 'ADD_GOTO'
export const EDIT_GOTO = 'EDIT_GOTO'
export const RECEIVE_GOTOS = 'RECEIVE_GOTOS'
export const RECEIVE_USER = 'RECEIVE_USER'
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE'

export const addGoto = (skill, nickname) => ({
  type: ADD_GOTO,
  goto: {
    id: new Date().getTime(),
    skill,
    nickname
  }
})

export const editGoto = (goto) => ({
  type: EDIT_GOTO,
  goto: {
    id: goto.id,
    skill: goto.skill,
    nickname: goto.nickname,
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

const addBlankGotoIfNeeded = (dispatch, getState) => {
  const state = getState()
  const lastGoto = state.gotos[state.gotos.length - 1]
  if (!lastGoto || lastGoto.created_at) {
    dispatch(addGoto())
  }
}

export const fetchGotos = username => (dispatch, getState) => {
  return $.get(`/api/users/${username}`)
    .then(json => {
      dispatch(receiveProfile(json))
      dispatch(receiveGotos(json.gotos))
      addBlankGotoIfNeeded(dispatch, getState)
    })
    .catch(err => {
      dispatch(receiveProfile(err))
    })
}

const createGoto = goto => (dispatch, getState) => {
  const user = getState().user
  // creating new goto, add another blank one
  dispatch(addGoto())
  return $.post(`/api/users/${user.id}/gotos`, { body: goto })
    .then(json => {
      dispatch(receiveGotos(json))
      addBlankGotoIfNeeded(dispatch, getState)
    })
}

const updateGoto = goto => (dispatch, getState) => {
  const user = getState().user
  return $.put(`/api/users/${user.id}/gotos/${goto.id}`, { body: goto })
    .then(json => {
      dispatch(receiveGotos(json))
      addBlankGotoIfNeeded(dispatch, getState)
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
      dispatch(receiveGotos(json))
      addBlankGotoIfNeeded(dispatch, getState)
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
