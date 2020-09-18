import React, {FC} from "react";
import { Task } from "./Task";
import {ITask} from "../interfaces";

interface Props {
  tasks: ITask[]
}

export const TaskList: FC<Props> = ({tasks}) => {
  return (
    <ul>
      {
        !!tasks && tasks.map((task) => <Task key={task.id} task={task}/>)
      }
    </ul>
  )
}
