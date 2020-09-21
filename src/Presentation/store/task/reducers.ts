import { CREATE_TASK, LIST_TASK } from "./types"

const INITIAL_STATE = {
  tasks: []
}

export default (state = INITIAL_STATE, {payload, type}: {payload: any, type: string}) => {
  switch (type) {
    case CREATE_TASK: return {...state, tasks: [...state.tasks, {...payload}]}
    case LIST_TASK: return {...state, tasks: [...payload]}
    default: return state
  }
}
