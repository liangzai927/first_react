import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

  search = () => {
    //获取用户输入
    const { keyWordElement: { value: keyWord } } = this //连续结构赋值 只有value 并重命名
    //发送网络请求
    axios.get(`/api1/search/users?q=${keyWord}`).then(
      res => { console.log(res.data) },
      err => { console.log(err) }
    )
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" ref={c => this.keyWordElement = c} placeholder="enter the name you search" />&nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
