import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {

  state = {
    users: [], //初始化状态 users初始值为[]
    isFirst: true, //是否为第一次打开页面
    isLoading: false, //是否加载中
    err: '' //存储请求相关的错误信息
  }

  componentDidMount() {
    //订阅
    this.token = PubSub.subscribe('getData', (_, stateObj) => { //第一个参数不用 用 _ 站位
      // console.log('List收到数据了:'+data)
      this.setState(stateObj)
    })
  }

  componentWillUnmount() {
    //销毁订阅
    PubSub.unsubscribe(this.token)
  }

  render() {
    const { users, isFirst, isLoading, err } = this.state
    return (
      <div className="row">
        {
          isFirst ? <h2>欢迎使用，请输入关键字，随后点击搜索</h2> :
            isLoading ? <h2>Loading......</h2> :
              err ? <h2 style={{ color: 'red' }}>{err}</h2> :
                users.length <= 0 ? <h2>暂无数据</h2> :
                  users.map(userObj => {
                    return (
                      <div className="card" key={userObj.id}>
                        <a rel="noreferrer" href={userObj.html_url} target="_blank">
                          <img alt="head_portrait" src={userObj.avatar_url} style={{ width: '100px' }} />
                        </a>
                        <p className="card-text">{userObj.login}</p>
                      </div>
                    )
                  })
        }
      </div>
    )
  }
}
