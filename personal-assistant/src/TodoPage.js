/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import { Layout, Panel, ListItem } from './styles'

const Todo = ({ todo: { id, task }, deleteTodo }) => (
  <ListItem>
    <p>{task}</p>
    <button type="button" onClick={() => deleteTodo(id)}>delete</button>
  </ListItem>
)

const TodoAdder = ({ addTodo }) => {
  const [task, setTask] = useState('')

  return (
    <div>
      <input onChange={e => setTask(e.target.value)} />
      <button type="button" onClick={() => addTodo(task)}>add</button>
    </div>
  )
}

const TodoList = ({ todos, deleteTodo, addTodo }) => (
  <Panel>
    <h1>Your Tasks</h1>
    {todos.map(todo => <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />)}
    <TodoAdder addTodo={addTodo} />
  </Panel>
)

const SearchPanel = ({ todos }) => {
  const [searches, setSearches] = useState([])

  const searchTask = query => {
    if (query) {
      const filtered = todos.filter(({ task }) => task.includes(query))
      setSearches(filtered)
    } else {
      setSearches([])
    }
  }

  return (
    <Panel>
      <h2>Search</h2>
      <input onChange={e => searchTask(e.target.value)} />
      <div>
        {searches.map(({ id, task }) => <p key={id}>{task}</p>)}
      </div>
    </Panel>
  )
}

const TodoPage = () => {
  const [todos, setTodos] = useState([
    {
      id: 0,
      task: 'hello',
    },
    {
      id: 1,
      task: 'goodbye',
    },
  ])

  const addTodo = taskName => {
    const newId = nanoid()
    setTodos([
      ...todos,
      {
        id: newId,
        task: taskName,
      },
    ])
  }

  const deleteTodo = todoId => {
    const filtered = todos.filter(({ id }) => id !== todoId)
    setTodos(filtered)
  }

  return (
    <Layout>
      <TodoList todos={todos} deleteTodo={deleteTodo} addTodo={addTodo} />
      <SearchPanel todos={todos} />
    </Layout>
  )
}

export default TodoPage
