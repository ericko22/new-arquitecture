import React, {Fragment, useEffect} from "react";
import {TaskList} from "../components/Task/TaskList";
import {CreateTask} from "../components/Task/CreateTask";
import {useDispatch, useSelector} from "react-redux";
import {ITask} from "../../DTO/Task";
import {createTask, listTasks, completeTask} from "../store/task/actions";

export const TodoPage = () => {
  const dispatch = useDispatch()
  const tasks: ITask[] = useSelector(({task}: any) => task.tasks)

  const handleSubmit = async (name: string) => {
    const data = {name, status: false, createdAt: new Date()}
    dispatch(createTask(data))
  }

  const handleComplete = async (taskId: string) => await dispatch(completeTask(taskId))
  const handleCleanTasks = async () => {}

  useEffect(() => {
    dispatch(listTasks())
  }, [dispatch])

  return (
    <Fragment>
      <CreateTask onSubmit={handleSubmit}/>
      <h1>Lista de tareas</h1>
      <button onClick={handleCleanTasks}>Limpiar tareas</button>
      <TaskList tasks={tasks} onComplete={handleComplete}/>
    </Fragment>
  )
}
