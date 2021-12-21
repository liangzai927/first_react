import React, { Component } from 'react'

class MyHeader extends Component {
  render() {
    return (
      <h2>React Router Demo</h2>
    )
  }
}


export default function Header(props) {
  return <MyHeader />
}