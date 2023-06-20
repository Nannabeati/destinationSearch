// Write your code here

import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachSearch =>
      eachSearch.toLowerCase().name.includes(searchInput.toLowerCase()),
    )

    return (
      <div className="container">
        <h1 className="heading">Destination search</h1>
        <div className="main-container">
          <div className="search-container">
            <input
              type="search"
              placeholder="search"
              className="search-input"
              onChange={this.onSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search-icon"
              className="icon"
            />
          </div>
          <div className="list-items">
            <ul>
              {searchResults.map(eachRes => (
                <DestinationItem key={eachRes.id} destinationsList={eachRes} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
