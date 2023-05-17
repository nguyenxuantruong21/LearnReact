import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      address: '',
      food: 'coconut',
      marriage: false
    }
  }

  handleChange = (event) => {
    const { target } = event
    const value = target.type === 'checkbox' ? target.checked : target.value
    const { name } = target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            name
            <input type='text' name='name' value={this.state.name} onChange={this.handleChange} />
          </label>
          <input type='checkbox' name='marriage' checked={this.state.marriage} onChange={this.handleChange} />
          <textarea value={this.state.address} name='address' onChange={this.handleChange}></textarea>
          <select value={this.state.food} name='food' onChange={this.handleChange}>
            <option value='grapefruit'>grapefruit</option>
            <option value='lime'>lime</option>
            <option value='coconut'>coconut</option>
            <option value='mango'>mango</option>
          </select>
          <input type='submit' name='submit' />
        </form>
      </div>
    )
  }
}

export default Form
