import React, { Component, createRef } from 'react'

export class UnControlComponent extends Component {
  constructor(props) {
    super(props)
    this.input = createRef()
    this.fileInput = createRef()
    this.state = {
      selectedFile: null,
      name: undefined
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name)
  }

  onFileChange = (event) => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  onChangeInput = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type='text' ref={this.input} id='name' value={this.state.name} onChange={this.onChangeInput} />
          </label>
          <input type='file' name='avatar' ref={this.fileInput} onChange={this.onFileChange} />
          <button type='submit' value='submit'>
            SUBMIT
          </button>
        </form>
      </div>
    )
  }
}

export default UnControlComponent
