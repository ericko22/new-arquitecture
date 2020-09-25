import {COMPLETE_TASK, CREATE_TASK, LIST_TASK} from "./types"
import {ITask} from "../../../DTO/Task";

const INITIAL_STATE = {
  tasks: []
}

export default (state = INITIAL_STATE, {payload, type}: { payload: any, type: string }) => {
  switch (type) {
    case CREATE_TASK:
      return {...state, tasks: [...state.tasks, {...payload}]}
    case LIST_TASK:
      return {...state, tasks: [...payload]}
    case COMPLETE_TASK: {
      let tasks: ITask[] = [...state.tasks].map((task: any) => task.id === payload.taskId ? {...payload.task} : {...task})
      return {...state, tasks}
    }
    default:
      return state
  }
}
