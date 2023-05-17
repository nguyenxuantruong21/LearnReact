import React from 'react'

class BareButton extends React.Component {
  handlerClick = (value) => {
    return () => {
      console.log(value)
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handlerClick('add')}>add</button>
        <button onClick={this.handlerClick}>edit</button>
        <button onClick={this.handlerClick}>delete</button>
      </div>
    )
  }
}

export default BareButton
