import React, {FC} from "react";
import {Task as ITask} from "../../Domain/Entities/Task";
import { Task } from "./Task";

interface Props {
  tasks: ITask[]
}

export const TaskList: FC<Props> = ({tasks}) => {
  return (
    <ul>
      {
        !!tasks && tasks.map((task) => <Task task={task}/>)
      }
    </ul>
  )
}
