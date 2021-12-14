import React, { Component } from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <Header />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生htmo中, 靠<a/>跳转不同的页面 */}
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */}

              {/* 在React中,靠路由连接实现组件切换--编写路由链接, v6版本中移除了activeClassName 要用className代替 且要用es6写法 */}
              <NavLink className={({ isActive }) => `list-group-item\n${isActive ? 'demo' : ''}`} to='/about'>About</NavLink>
              <NavLink className={({ isActive }) => `list-group-item\n${isActive ? 'demo' : ''}`} to='/home'>Home</NavLink>
              <MyNavLink />

            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                {/* react-router6.x版本以上要有下面的写法 */}
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/home" element={<Home />} />
                </Routes>
                {/* 6.x以下要用这种写法 */}
                {/* <Route path="/about" component={About} />
                <Route path="/home" component={Home} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
