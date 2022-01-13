/* 
  该文件专门用于暴露一个 store 对象 整个应用只有一个 store 对象

*/
import reducer from './reducers'

//引入 createStore, 专门用于创建redux里的store
import { createStore, applyMiddleware } from 'redux'

//引入 redux-thunk 用于支持异步action
import thunk from 'redux-thunk'
//引入 redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

