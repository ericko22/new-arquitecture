import React, {useEffect} from "react";
import {TaskList} from "../components/Task/TaskList";
import {CreateTask} from "../components/Task/CreateTask";
import {useDispatch, useSelector} from "react-redux";
import {ITask} from "../../DTO/Task";
import {createTask, listTasks, ChangeStatus, cleanComplete} from "../store/task/actions";
import {Grid, Icon, Button, Card, CardHeader} from "@material-ui/core";
import { TodoAppBar } from "../components/TodoAppBar";
import {IUser} from "../../DTO/IUser";
import {getUser} from "../store/user/actions";

export const TodoPage = () => {
  const dispatch = useDispatch()
  const tasks: ITask[] = useSelector(({task}: any) => task.tasks)
  const user: IUser = useSelector(({user}: any) => user.user)

  const handleSubmit = async (name: string) => {
    if (user) {
      const data: ITask = {name, status: false, createdAt: new Date(), user}
      dispatch(createTask(data))
    }
  }

  const handleComplete = async (taskId: string, value: boolean) => await dispatch(ChangeStatus(taskId, value))
  const handleCleanTasks = async () => await dispatch(cleanComplete())

  useEffect(() => {
    dispatch(listTasks())
    dispatch(getUser())
  }, [dispatch])

  return (
    <Grid container direction="column" alignItems="center" >
      <Grid item container component={Card} lg={4} md={4} sm={6} xs={12} direction="column" spacing={2} style={{minHeight: 'calc(100vh - 25px)', marginTop: 2}} elevation={3}>
        <CardHeader component={TodoAppBar} userName={user.userName}/>
        <Grid item>
          <CreateTask onSubmit={handleSubmit}/>
        </Grid>
        <Grid item>
          <Button fullWidth endIcon={<Icon>clear_all</Icon>} variant="outlined" onClick={handleCleanTasks}>
            Limpiar tareas
          </Button>
        </Grid>
        <Grid item>
          <TaskList tasks={tasks} onComplete={handleComplete}/>
        </Grid>
      </Grid>
    </Grid>
  )
}
