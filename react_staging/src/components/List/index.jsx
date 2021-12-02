import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {

  //对接受的props进行: 类型、必要性的限制
  static propTypes = {
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
  }

  render() {
    const { todos, updateTodo, deleteTodo } = this.props
    return (
      <ul className="todo-main">
        {
          todos.map(todo => {
            return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
          })
        }

      </ul>
    )
  }
}
