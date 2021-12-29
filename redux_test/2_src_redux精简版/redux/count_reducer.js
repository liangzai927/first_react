/* 
  1.该文件是用于创建一个为 Count 组件服务的 reducer, reducer 的本质就是一个函数
  2.reducer函数会接受两个参数, 分别问: 之前的状态(preState), 动作对象(action)
*/

export default function countReducer(pre = 0, action) {
  //从 action 对象中获取 type, data
  const { type, data } = action
  //根据type 决定如何加工数据
  switch (type) {
    case 'increment': //如果是加
      return pre + data
    case 'decrement': //如果是减
      return pre - data
    default: //初始化
      return pre
  }
}