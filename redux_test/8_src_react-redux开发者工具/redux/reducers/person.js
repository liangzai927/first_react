import { ADD_PERSON } from "../constant";

//初始化人的列表
const initState = [{ id: '001', name: 'tom', age: 18 }]

export default function personReducer(preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case ADD_PERSON:
      // preState.unshift(data) // 错误写法: 这样写会导致 preState 被改写, reducer要求一定是个纯函数
      return [data, ...preState]
    default:
      return preState
  }
}