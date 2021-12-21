import React, { Component } from 'react'
import { Outlet, Link } from 'react-router-dom'

export default class Message extends Component {

  state = {
    messageArr: [
      { id: '01', title: '消息1' },
      { id: '02', title: '消息2' },
      { id: '03', title: '消息4' },
    ]
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
                  {/* 传递search参数 */}
                  {/* 开启replace模式 会覆盖之前的浏览记录 */}
                  <Link replace to={`/home/message/detail?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>
                  {/* <Link to={{ pathname: '/home/message/detail', state: { id: msgObj.id, title: msgObj.title } }}>{msgObj.title}</Link> */}
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
