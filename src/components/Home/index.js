import {Component} from 'react'
import ListView from '../ListView'
import GridView from '../GridView'

import './index.css'

class Home extends Component {
  state = {isList: true, searchInput: '', initilaData: []}

  componentDidMount() {
    this.getData()
  }

  searchInputText = event => {
    this.setState({searchInput: event.target.value})
  }

  changeListView = () => {
    this.setState({isList: true})
  }

  changeGridView = () => {
    this.setState({isList: false})
  }

  getData = async () => {
    const response = await fetch(
      'https://mocki.io/v1/0934df88-6bf7-41fd-9e59-4fb7b8758093',
    )
    const data = await response.json()

    const newData = data.data.map(item => ({
      id: data.data.indexOf(item),
      productTitle: item.product_title,
      image: item.product_image,
      badge: item.product_badge,
      variants: item.product_variants,
    }))
    console.log(newData)
    this.setState({initilaData: newData})
  }

  render() {
    const {isList, searchInput, initilaData} = this.state
    const newFilterData = initilaData.filter(item =>
      item.productTitle.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="home">
        <div className="home-container">
          <h1 className="home-heading">PLP</h1>
          <div className="home-card">
            <input
              type="text"
              placeholder="Type something to Search"
              onChange={this.searchInputText}
              value={searchInput}
              className="input"
            />
            <button onClick={this.changeListView} type="button" className="btn">
              List
            </button>
            <button onClick={this.changeGridView} type="button" className="btn">
              Grid
            </button>
          </div>
          {isList ? (
            <ul className="home-ul">
              {newFilterData.map(eachItem => (
                <ListView key={eachItem.id} info={eachItem} />
              ))}
            </ul>
          ) : (
            <ul className="home-ul-grid">
              {newFilterData.map(eachItem => (
                <GridView key={eachItem.id} info={eachItem} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Home
