// 只是一个 Count 的容器组件  保证ui组件跟rudex可以操作
//引入Count的ui组件
import CuntUI from '../../components/Count'

//引入 connect 用于连接UI组件与 redux
import { connect } from 'react-redux'

//引入action
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../../redux/count_action'


/* 
  1. mapStateToProps函数返回的是一个对象
  2. 返回的对象中的key就作为传递给UI组件props的key, value就作为传递给UI组件的props的value
  3. mapStateToProps用于传递状态
*/

function mapStateToProps(state) {
  return { count: state }
}

/* 
  1. mapDispatchToProps函数返回的是一个对象
  2. 返回的对象中的key就作为传递给UI组件props的key, value就作为传递给UI组件的props的value
  3. mapDispatchToProps用于传递操作状态的方法
*/
function mapDispatchToProps(dispatch) {
  return {
    add: number => dispatch(createIncrementAction(number)),
    jian: number => dispatch(createDecrementAction(number)),
    addAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time)),
  }
}

//使用 connect()(ui组件) 创建并暴露一个 Count 的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CuntUI)

