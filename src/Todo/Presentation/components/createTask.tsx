import React, {FC, useState} from "react"

interface Props {
  onSubmit: (name: string) => void
}

export const CreateTask: FC<Props> = ({onSubmit}) => {
  const [task, setTask ] = useState<string>('')

  const handleChange = ({target}: any) => setTask(target.value)
  const handleSubmit = (e: any) => {
    e.preventDefault()
    onSubmit(task)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={handleChange}/>
      <button type="submit">crear tarea</button>
    </form>
  )
}
