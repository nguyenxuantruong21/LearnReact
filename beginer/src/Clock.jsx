import React from 'react'

const lists = ['BMV', 'TOYOTA', 'HONDA']

const fetchApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(lists)
    }, 1000)
  })
}

export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: {
        created: new Date().getSeconds()
      },
      list: [],
      darkMode: false
    }
  }

  componentDidMount() {
    fetchApi().then((res) =>
      this.setState((prevState) => ({
        ...prevState,
        lists: res
      }))
    )
  }

  componentDidUpdate() {
    if (this.state.darkMode) {
      const value = document.querySelector('input').value
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  getTime = () => {
    const newState = {
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: {
        created: new Date().getSeconds()
      }
    }
    this.setState(newState)
  }

  toggleDarkMode = () => {
    this.setState((prevState) => ({
      ...prevState,
      darkMode: !prevState.darkMode
    }))
  }

  render() {
    console.log('render')
    return (
      <div>
        <h1>this is a {this.state.time.created}</h1>
        <h2 id='seconds'>this is a {this.state.seconds.created}</h2>
        <button onClick={this.getTime}>Set Time</button>
        <button onClick={this.toggleDarkMode}>Toggle</button>
        {this.state.darkMode && <input value={this.state.darkMode} type='text' />}
      </div>
    )
  }
}
