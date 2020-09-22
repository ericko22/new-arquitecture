import React, {FC} from "react";
import { ITask } from "../../../DTO/Task";
import {
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Icon,
  makeStyles,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  name: {
    textDecoration: ({complete}: any) => complete ? 'line-through' : 'none'
  }
}))

interface Props {
  task: ITask
  onComplete: (taskId: string, value: boolean) => void
}

export const Task: FC<Props> = ({task, onComplete}) => {
  const classes = useStyles({complete: task.status})

  const handleComplete = async () => {
    if (task.id != null) await onComplete(task.id, !task.status)
  }

  return (
    <ListItem role={undefined} dense button onClick={handleComplete}>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={task.status}
          tabIndex={-1}
          disableRipple
        />
      </ListItemIcon>
      <ListItemText className={classes.name}>
        <Typography variant="subtitle1">{task.name}</Typography>
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton>
          <Icon color="error">delete</Icon>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
