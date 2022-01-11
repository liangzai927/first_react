import React, { Component } from 'react'
//引入 connect 用于连接UI组件与 redux
import { connect } from 'react-redux'
//引入action
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../../redux/count_action'

//定义 UI 组件
class Count extends Component {

  state = {
    car: 'abc'
  }
  //加法
  increment = () => {
    const { value } = this.selectNumber
    this.props.createIncrementAction(value * 1)
    // console.log(value);
  }
  //减法
  decrement = () => {
    const { value } = this.selectNumber
    this.props.createDecrementAction(value * 1)
  }
  //奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    if (this.props.count % 2 !== 0) this.props.createIncrementAction(value * 1)
  }
  //异步加
  incrementAsync = () => {
    const { value } = this.selectNumber
    this.props.createIncrementAsyncAction(value * 1, 500)
  }

  render() {
    return (
      <div>
        <h1>当前求和为:{this.props.count}</h1>
        <select ref={c => this.selectNumber = c} >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}

//使用 connect()(ui组件) 创建并暴露一个 Count 的容器组件
export default connect(
  state => ({ count: state }),
  // mapDispatchToProps 的一般写法
  // dispatch => ({
  //   add: number => dispatch(createIncrementAction(number)),
  //   jian: number => dispatch(createDecrementAction(number)),
  //   addAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time)),
  // })

  //mapDispatchToProps 的简写
  {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
  }
)(Count)

