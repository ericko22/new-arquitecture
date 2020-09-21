import React, {Fragment, useEffect} from "react";
import {TaskList} from "../components/Task/TaskList";
import {CreateTask} from "../components/Task/CreateTask";
import {useDispatch, useSelector} from "react-redux";
import {ITask} from "../../DTO/Task";
import {createTask, listTasks} from "../store/task/actions";

export const TodoPage = () => {
  const dispatch = useDispatch()
  const tasks: ITask[] = useSelector(({task}: any) => task.tasks)

  const handleSubmit = async (name: string) => {
    const data = {name, status: false, createdAt: new Date()}
    dispatch(createTask(data))
  }

  useEffect(() => {
    dispatch(listTasks())
  }, [dispatch])

  return (
    <Fragment>
      <CreateTask onSubmit={handleSubmit}/>
      <h1>Lista de tareas</h1>
      <TaskList tasks={tasks}/>
    </Fragment>
  )
}
