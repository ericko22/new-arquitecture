import React, {FC} from "react";
import { ITask } from "../../../DTO/Task";

interface Props {
  task: ITask
  onComplete: (taskId: string) => void
}

export const Task: FC<Props> = ({task, onComplete}) => {

  const handleComplete = async () => {
    if (task.id != null) await onComplete(task.id)
  }

  return (
    <li style={{marginTop: 10}}>
      <span style={{marginRight: 15}}>{`${task.name} - ${task.status}`}</span>
      <button onClick={handleComplete}>Completar Tarea</button>
    </li>
  )
}
