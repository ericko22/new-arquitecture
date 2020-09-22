import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core'

export const TodoAppBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          TodoApp
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
