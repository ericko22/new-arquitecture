import React, {FC, useState} from "react"
import {Paper, InputBase, Divider, Button} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  divider: {
    height: 28,
    margin: 4,
  }
}))

interface Props {
  onSubmit: (name: string) => void
}

export const CreateTask: FC<Props> = ({onSubmit}) => {
  const classes = useStyles()
  const [task, setTask] = useState<string>('')

  const handleChange = ({target}: any) => setTask(target.value)
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    await onSubmit(task)
    setTask('')
  }

  return (
    <Paper component="form" onSubmit={handleSubmit} className={classes.root} elevation={5}>
      <InputBase
        className={classes.input}
        placeholder="Descripción de la tarea"
        inputProps={{'aria-label': 'search google maps'}}
        value={task}
        onChange={handleChange}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <Button type="submit">Crear tarea</Button>
    </Paper>
  )
}
