import React from 'react'
import ReactDom from 'react-dom'
import App from './app'
import store from './redux/store'
import { Provider } from 'react-redux'

ReactDom.render(
  /* 
    此处需要用Provider包裹App
    目的是让App左右子组件都可以接收到store
  */
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
