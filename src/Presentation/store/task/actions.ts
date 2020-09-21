import UseCases from "../../../UseCases"
import {CREATE_TASK, LIST_TASK} from "./types";
import {ITask} from "../../../DTO/Task";

const {task: TaskUseCases} = UseCases

export const listTasks = () => async (dispatch: any) => {
  const tasks = await TaskUseCases.get()
  dispatch({type: LIST_TASK, payload: tasks})
}

export const createTask = (data: ITask) => async (dispatch: any) => {
  const task = await TaskUseCases.create(data)
  dispatch({type: CREATE_TASK, payload: task})
}
