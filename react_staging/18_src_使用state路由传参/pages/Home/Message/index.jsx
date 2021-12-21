import React, { Component } from 'react'
// 使用 useNavigate 实现路由跳转
import { Outlet, Link, useNavigate } from 'react-router-dom'

class MyMessage extends Component {

  state = {
    messageArr: [
      { id: '01', title: '消息1' },
      { id: '02', title: '消息2' },
      { id: '03', title: '消息4' },
    ]
  }

  replaceShow = (id, title, bool) => {
    let { navigation } = this.props
    // 这里可以用state传递参数
    navigation(`/home/message/detail`, { state: { id, title, replace: bool } })
  }

  render() {
    const { messageArr } = this.state
    return (
      <div>
        <ul>
          {
            messageArr.map(msgObj => {
              return (
                <li key={msgObj.id}>
                  {/* 传递state参数 */}
                  <Link to='/home/message/detail' state={{ id: msgObj.id, title: msgObj.title }} >{msgObj.title}</Link>
                  {/* <Link to={`/home/message/detail?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}
                </li>
              )
            })
          }
        </ul>
        <hr />
        <Outlet />
      </div >
    )
  }
}

/* 将类式组件嵌套的在函数组件中 useNavigate只能在函数组件使用 */

export default function Message(props) {
  const navigation = useNavigate()
  return <MyMessage {...props} navigation={navigation}></MyMessage>
}
