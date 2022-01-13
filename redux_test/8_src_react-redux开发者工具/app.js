import React, { Component } from 'react'
import Count from './containers/Count'
import Person from './containers/Person'

export default class index extends Component {
  render() {
    return (
      <div>
        <Count />
        <hr />
        <Person />
      </div>
    )
  }
}
