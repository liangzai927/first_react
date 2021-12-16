import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
// import { Route, Routes, Outlet } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
// import News from './News'
// import Message from './Message'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/message">Message</MyNavLink>
            </li>
          </ul>
        </div>
        {/* 嵌套路由 注册在最外层父集的routes里 <Outlet/> 占位置 会自动展示匹配到的子页面 */}
        <Outlet />

      </div>
    )
  }
}
