import React, { Component } from 'react'
import Count from './containers/Count' //引入Count的容器组件
import Person from './containers/Person'//引入Person的容器组件

export default class index extends Component {
  render() {
    return (
      <div>
        <Count />
        <hr />
        <Person />
      </div>
    )
  }
}
