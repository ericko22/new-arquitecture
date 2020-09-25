import {GET_USER} from "./types"

const INITIAL_STATE = {
  user: {}
}

interface Params {
  payload: any,
  type: string
}

export default (state = INITIAL_STATE, {payload, type}: Params) => {
  switch (type) {
    case GET_USER:
      return {...state, user: {...state.user, ...payload}}
    default:
      return state
  }
}
