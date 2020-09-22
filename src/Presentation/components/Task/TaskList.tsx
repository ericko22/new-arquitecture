import React, {FC} from "react";
import { Task } from "./Task";
import {ITask} from "../../../DTO/Task";
import { List } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    maxHeight: 'calc(100vh - 230px)',
    overflowY: 'auto'
  }
}))

interface Props {
  tasks: ITask[]
  onComplete: (taskId: string, value: boolean) => void
}

export const TaskList: FC<Props> = ({tasks, onComplete}) => {

  const classes = useStyles()
  return (
    <List className={classes.root}>
      {
        !!tasks && tasks.map((task) => <Task onComplete={onComplete} key={task.id} task={task}/>)
      }
    </List>
  )
}
