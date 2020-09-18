import React, {FC} from "react";
import { ITask } from "../../DTO/Task";

interface Props {
  task: ITask
}

export const Task: FC<Props> = ({task}) => {
  return (
    <li style={{marginTop: 10}}>
      <span style={{marginRight: 15}}>{`${task.name} - ${task.status}`}</span>
      <button>Completar Tarea</button>
    </li>
  )
}
