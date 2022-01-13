/* 
  该文件用于汇总所有的 reducer 为一个总的 recdecer
*/

// 引入combineReducers用于合并reducer 
import { combineReducers } from 'redux'
//引入为 Count 组件服务的reducer
import count from './count'
//引入为 Person 组件服务的reducer
import person from './person'

//合并reducer并暴露
export default combineReducers({
  count,
  person
})
