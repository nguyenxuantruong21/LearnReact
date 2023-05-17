import React from 'react'

function Welcome(props) {
  console.log(props)
  return (
    <h1>
      Hello,{props.name} - {props.age}
    </h1>
  )
}

export default Welcome
