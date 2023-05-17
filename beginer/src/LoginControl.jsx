import React from 'react'

class LoginButton extends React.Component {
  render() {
    return <button onClick={this.props.onClick}>Login</button>
  }
}

class LogoutButton extends React.Component {
  render() {
    return <button onClick={this.props.onClick}>Logout</button>
  }
}

class LoginControl extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
    this.state = { isLoggedIn: false }
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true
    })
  }
  handleLogout = () => {
    this.setState({
      isLoggedIn: false
    })
  }

  render() {
    const { isLoggedIn } = this.state
    return (
      <div className='login-control'>
        {isLoggedIn ? <LogoutButton onClick={this.handleLogout} /> : <LoginButton onClick={this.handleLogin} />}
      </div>
    )
  }
}

export default LoginControl