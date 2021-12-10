import React, { Component } from 'react'
import PubSub from 'pubsub-js'
// import axios from 'axios'

export default class Search extends Component {

  search = async () => {

    //发布消息
    // PubSub.publish('getData', { name: 'zhangsan', age: 18 })



    //获取用户输入
    const { keyWordElement: { value: keyWord } } = this //连续结构赋值 只有value 并重命名
    //发送请求前 通知 List 更细状态
    // this.props.updateAppState({ isFirst: false, isLoading: true })
    PubSub.publish('getData', { isFirst: false, isLoading: true })
    //#region  发送网络请求-----使用axios发送
    /* axios.get(`/api1/search/users?q=${keyWord}`).then(
      res => {
        //请求成功后通知 List 更新状态
        // this.props.updateAppState({ isLoading: false, users: res.data.items })
        PubSub.publish('getData', { isLoading: false, users: res.data.items })
      },
      err => {
        //请求失败后通知 List 更新状态
        // this.props.updateAppState({ isLoading: false, err: err.message })
        PubSub.publish('getData', { isLoading: false, err: err.message })

      }
    ) */
    //#endregion

    //使用 fetch 发送网络请求 --- 未优化
    // fetch(`/api1/search/users2?q=${keyWord}`).then(
    //   res => {
    //     console.log('联系服务器成功了')
    //     return res.json()
    //   },
    //   err => {
    //     console.log('联系服务器失败了', err.message)
    //     return new Promise(() => { })
    //   }
    // ).then(
    //   res => { console.log(res) },
    //   err => { console.log(err) }
    // )

    //使用 fetch 发送网络请求 --- 优化
    try {
      const res = await fetch(`/api1/search/users2?q=${keyWord}`)
      const data = await res.json()
      PubSub.publish('getData', { isLoading: false, users: data.items, err: '' })
    } catch (err) {
      PubSub.publish('getData', { isLoading: false, err: err.message })
    }

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
