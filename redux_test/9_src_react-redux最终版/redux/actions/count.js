/* 
  该文件专门为 Count 组件生成 action 对象
*/
import { INCREMENT, DECREMENT } from '../constant'

//同步 action, 返回值为Object类型的一般对象
export const increment = data => ({ type: INCREMENT, data })
export const decrement = data => ({ type: DECREMENT, data })
export const incrementAsync = (data, time) => {
  // 返回一个函数 就是异步 action
  // 异步 action 中一般都会调用同步action
  // 异步acion 不是必须要用的
  return (dispatch) => {
    setTimeout(() => {
      //通知 redux 改变state
      dispatch(increment(data))
    }, time)
  }
}

