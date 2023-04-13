import React, { Component } from 'react'
import Loading from './Loading.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div>
        <img src={Loading}/>
      </div>
    )
  }
}
