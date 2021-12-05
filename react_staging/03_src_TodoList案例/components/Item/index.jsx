import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  state = { mouse: false }

  //鼠标移入、移出的回调
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag })
    }
  }

  //勾选、取消勾选的回调
  handleCheck = (id) => {
    return (event) => {
      const { checked } = event.target
      this.props.updateTodo(id, checked)
    }
  }

  //删除一个todo的回调
  handleDelete = (id) => {
    let { deleteTodo } = this.props
    if (window.confirm('确定删除吗')) deleteTodo(id)
  }

  render() {
    const { id, name, done } = this.props
    const { mouse } = this.state
    return (
      <li style={{ backgroundColor: mouse ? '#ddd' : '#fff' }} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
          <span>{name}</span>
        </label>
        <button onClick={() => this.handleDelete(id)} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }} >删除</button>
      </li>
    )
  }
}
