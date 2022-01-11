import React, { Component } from 'react'
// import Count from './components/Count'
import Count from './containers/Count'
//引入store
// store 必须以 props 的形式传给 容器组件
import store from './redux/store'

export default class index extends Component {
  render() {
    return (
      <div>
        {/* 给容器组件传递 store */}
        <Count store={store} />
      </div>
    )
  }
}
