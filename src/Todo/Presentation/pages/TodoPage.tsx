import React, {Fragment, useEffect, useState} from "react";
import UseCases from "../../UseCases";
import {TaskList} from "../components/Task/TaskList";
import { CreateTask } from "../components/Task/CreateTask";
import {ITask} from "../../DTO/Task";

export const TodoPage = () => {
  const [tasks, setTasks] = useState<ITask[]>([])
  const {create, get} = UseCases.task

  const handleSubmit = async (name: string) => {
    const task = await create({name, status: false, createdAt: new Date()})
    setTasks([...tasks, {...task}])
  }

  useEffect(() => {
    get().then((tasks) => setTasks(tasks))
  }, [get])

  return (
    <Fragment>
      <CreateTask onSubmit={handleSubmit}/>
      <h1>Lista de tareas</h1>
      <TaskList tasks={tasks}/>
    </Fragment>
  )
}
