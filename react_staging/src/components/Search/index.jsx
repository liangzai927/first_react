import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

  search = () => {
    //获取用户输入
    const { keyWordElement: { value: keyWord } } = this //连续结构赋值 只有value 并重命名
    //发送请求前 通知app更细状态
    this.props.updateAppState({ isFirst: false, isLoading: true })

    //发送网络请求
    axios.get(`/api1/search/users?q=${keyWord}`).then(
      res => {
        //请求成功后通知App更新状态
        this.props.updateAppState({ isLoading: false, users: res.data.items })
      },
      err => {
        //请求失败后通知App更新状态
        this.props.updateAppState({ isLoading: false, err: err.message })
      }
    )
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索Github用户</h3>
        <div>
          <input type="text" ref={c => this.keyWordElement = c} placeholder="enter the name you search" />&nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
