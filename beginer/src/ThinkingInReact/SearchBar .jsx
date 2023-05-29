import React, { Component } from 'react'

export class SearchBar extends Component {
  render() {
    const { searchText, inStock, handleChange } = this.props
    return (
      <div>
        <form>
          <input type='text' placeholder='search...' value={searchText} onChange={handleChange('searchText')} />
          <div>
            <input type='checkbox' value={inStock} onChange={handleChange('inStock')} />
            Only show product in Stock
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
