import React from 'react'
import PropTyoes from 'prop-types'
import Todo from './Todo'

const TodoList = ({todos, handleDelete, handleDone}) => {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
    }}>
        {todos.map((task) => {
            return (
                <Todo task = {task} key = {task.id} handleDelete = {handleDelete} handleDone = {handleDone} />
            )
        })}
    </div>
  )
}

TodoList.propTypes = {
    todos: PropTyoes.array,
    handleDelete: PropTyoes.func,
    handleDone: PropTyoes.func,
}

export default TodoList