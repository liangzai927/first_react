import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  //全部勾选 / 取消勾选
  handleCheckAll = event => {
    this.props.checkAllTodo(event.target.checked)
  }

  //清除所有已选的
  handleClear = () => {
    this.props.clearAllDone()
  }

  render() {
    const { todos } = this.props
    // const doneCount = todos.filter(todoObj => {
    //   if (todoObj.done) return todoObj
    // })
    // const doneCount = todos.reduce((pre, current) => {
    //   //pre 上一次返回值 curent当前值
    //   // if (current.done) return pre + 1
    //   return pre + (current.done ? 1 : 0)
    // }, 0)
    const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
    const total = todos.length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={doneCount === total && total !== 0 ? true : false} onChange={this.handleCheckAll} />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.handleClear}>清除已完成任务</button>
      </div>
    )
  }
}
