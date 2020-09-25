import React, {FC} from 'react'
import {AppBar, Avatar, Grid, Toolbar, Typography} from '@material-ui/core'

interface Props {
  userName: string
}

export const TodoAppBar: FC<Props> = ({userName}) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid item>
            <Typography variant="h6">
              TodoApp
            </Typography>
          </Grid>
        </Grid>
        <Avatar style={{height: 30, width: 30, background: '#518aba'}}>{userName && userName.split('')[0]}</Avatar>
      </Toolbar>
    </AppBar>
  )
}
