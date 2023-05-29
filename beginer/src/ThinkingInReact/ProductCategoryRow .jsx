import React, { Component } from 'react'

export class ProductCategoryRow extends Component {
  render() {
    return (
      <tr>
        <th>{this.props.category}</th>
      </tr>
    )
  }
}

export default ProductCategoryRow
