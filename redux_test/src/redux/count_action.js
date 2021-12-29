/* 
  该文件专门为 Count 组件生成 action 对象
*/
import { INCREMENT, DECREMENT } from './constant'


export const createIncrementAction = data => ({ type: INCREMENT, data })

export const createDecrementAction = data => ({ type: DECREMENT, data })

