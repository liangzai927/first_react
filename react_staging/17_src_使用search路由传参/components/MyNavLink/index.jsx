import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {



  render() {
    // const { to } = this.props
    /* 
      标签体的内容可以用 this.props.children 属性,
      给标签添加children属性 也会显示标签体的内容 
    */
    return (
      <NavLink className={({ isActive }) => `list-group-item\n${isActive ? 'demo' : ''}`} {...this.props} />
    )
  }
}
