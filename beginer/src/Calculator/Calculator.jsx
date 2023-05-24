import React, { Component } from 'react'
import TemperatureInput from './TemperatureInput'
import BoilingVerdict from './BoilingVerdict'

const scaleName = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

const toCelsius = (fahrenheit) => {
  return (fahrenheit - 32) / 1.8
}
const toFahrenheit = (celsius) => {
  return celsius * 1.8 + 32
}

const TryConvert = (temperature, convertFunc) => {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) {
    return ''
  }
  let output = convertFunc(input)
  return Math.round(output * 100) / 100
}

export class Calculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      temperature: '',
      scale: 'c'
    }
  }

  handleChange = (scale) => (value) => {
    this.setState({
      temperature: value,
      scale: scale
    })
  }

  render() {
    const { scale, temperature } = this.state
    const celsius = scale === 'f' ? TryConvert(temperature, toCelsius) : temperature
    const Fahrenheit = scale === 'c' ? TryConvert(temperature, toFahrenheit) : temperature

    return (
      <div>
        <TemperatureInput title={scaleName.c} temperature={celsius} onTemperatureChange={this.handleChange('c')} />
        <TemperatureInput title={scaleName.h} temperature={Fahrenheit} onTemperatureChange={this.handleChange('f')} />
        <BoilingVerdict celsius={Number(celsius)} />
      </div>
    )
  }
}

export default Calculator
