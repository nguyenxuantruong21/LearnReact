import React, { Component } from 'react'

export class BoilingVerdict extends Component {
  render() {
    return <div>{this.props.celsius >= 100 ? 'The water would boiled' : 'The water would not boiled'}</div>
  }
}

export default BoilingVerdict
