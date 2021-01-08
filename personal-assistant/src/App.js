import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import TodoPage from './TodoPage'
import GreetingPage from './GreetingPage'

const App = () => (
  <div>
    <div>
      <ul>
        <li>
          <Link to="/">
            home
          </Link>
        </li>
        <li>
          <Link to="/todo">
            todos
          </Link>
        </li>
      </ul>
    </div>
    <Switch>
      <Route path="/todo">
        <TodoPage />
      </Route>
      <Route path="/">
        <GreetingPage />
      </Route>
    </Switch>
  </div>
)

export default App
