/* 
  该文件专门用于暴露一个 store 对象 整个应用只有一个 store 对象

*/


//引入 createStore, 专门用于创建redux里的store
import { createStore } from 'redux'
//引入为 Count 组件服务的reducer
import countReducer from './count_reducer'

export default createStore(countReducer)

