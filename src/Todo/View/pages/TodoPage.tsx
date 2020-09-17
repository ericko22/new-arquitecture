import React, {Fragment, useEffect, useState} from "react";
import {Task} from "../../Domain/Entities/Task";
import {TaskUseCasesFactory} from "../../UseCases/TaskUseCasesFactory";
import {TaskList} from "../components/TaskList";
import { CreateTask } from "../components/createTask";

export const TodoPage = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const useCases = TaskUseCasesFactory.execute()

  const handleSubmit = async (name: string) => {
    const task = await useCases.create({name, status: false, createdAt: new Date()})
    setTasks([...tasks, {...task}])
  }

  useEffect(() => {
    useCases.get().then((tasks) => setTasks(tasks))
  }, [useCases])

  return (
    <Fragment>
      <CreateTask onSubmit={handleSubmit}/>
      <h1>Lista de tareas</h1>
      <TaskList tasks={tasks}/>
    </Fragment>
  )
}
