import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {

  return (
    <>
      {
        todos.map((todo, i) =>
        (
          <React.Fragment key={i}>
            <Todo todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
            <hr />
          </React.Fragment>
        )
        )
      }
    </>
  )
}

export default TodoList
