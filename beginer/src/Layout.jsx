import React from 'react'

// class Layout extends React.Component {
//   render() {
//     return <div className='Layout'>{this.props.children}</div>
//   }
// }

function Layout(props) {
  return <div className='Layout'>{props.children}</div>
}

Layout.propTypes = {}

export default Layout
