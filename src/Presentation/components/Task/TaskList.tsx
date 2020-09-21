import React, {FC} from "react";
import { Task } from "./Task";
import {ITask} from "../../../DTO/Task";

interface Props {
  tasks: ITask[]
  onComplete: (taskId: string) => void
}

export const TaskList: FC<Props> = ({tasks, onComplete}) => {
  return (
    <ul>
      {
        !!tasks && tasks.map((task) => <Task onComplete={onComplete} key={task.id} task={task}/>)
      }
    </ul>
  )
}
