import React, { Component } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'
import News from './pages/Home/News'
import Message from './pages/Home/Message'
import Detail from './pages/Home/Message/Detail'


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
              {/* <NavLink className={({ isActive }) => `list-group-item\n${isActive ? 'demo' : ''}`} to='/about'>About</NavLink>
              <NavLink className={({ isActive }) => `list-group-item\n${isActive ? 'demo' : ''}`} to='/home'>Home</NavLink> */}
              <MyNavLink to='/about' >About</MyNavLink>
              <MyNavLink to='/home' >Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                {/* react-router6.x版本以上要有下面的写法  routes包裹之后 匹配到一次之后就停止匹配  v6版本嵌套路由要写在一起 子组件要用<Outlet/> 占位置  */}

                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/home" element={<Home />}>
                    <Route path='news' index element={<News />} />
                    <Route path='message' element={<Message />} >
                      <Route path=':id/:title' element={<Detail />}></Route>
                    </Route>
                    <Route path="/home" element={<Navigate to='/home/message' />} />
                  </Route>
                  {/* 6.x以后用 <Navigate/> 重定向  */}
                  <Route path="*" element={<Navigate to="/about" />} ></Route>
                </Routes>
                {/* 6.x以下要用这种写法, 用<Redirect/> 重定向 */}
                {/* <Switch>
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                  
                  <Redirect to="about" />
                </Switch> */}
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}
