import React, { Component } from 'react'
import './Cart.scss'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 1500px;
  margin: auto;
  padding-left: 1rem;
  padding-right: 1rem;
`

function Buttons({ isShow }) {
  return (
    <div className='buttons'>
      <button className='button-item'>Hello</button>
    </div>
  )
}

export class Cart extends Component {
  render() {
    return (
      <Container>
        Category
        <div className='button'></div>
      </Container>
    )
  }
}

export default Cart
