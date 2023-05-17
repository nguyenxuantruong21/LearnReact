import React, { Component } from 'react'
import ProductItem from './ProductItem'

export class ProductList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ProductList: [
        {
          id: '1a',
          name: 'Sony',
          avatar: 'sn'
        },
        {
          id: '2b',
          name: 'iphone',
          avatar: 'ip'
        },
        {
          id: '3c',
          name: 'samsung',
          avatar: 'ss'
        }
      ]
    }
  }

  orderProductList = () => {
    this.setState((prevState) => ({
      productList: prevState.productList.sort((a, b) => {
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
      })
    }))
  }

  addProductList = () => {
    this.setState((prevState) => ({
      productList: [
        ...prevState.productList,
        {
          id: '4d',
          name: 'huawei',
          avatar: 'hw'
        }
      ]
    }))
  }

  render() {
    return (
      <div>
        <h1>ProductList</h1>
        <button onClick={this.orderProductList}>click for sort</button>
        <button onClick={this.addProductList}>add Product List</button>
        <div className='product-list'>
          {this.state.ProductList.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default ProductList
