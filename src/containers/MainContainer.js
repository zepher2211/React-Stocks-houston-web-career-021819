import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import Stock from '../components/Stock'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    sortBy: '',
    filterBy: ''
  }

  fetchStocks = () => {
    fetch(`http://localhost:3000/stocks`)
      .then(res => res.json())
      .then(stockData => this.setState({stocks: stockData}))
  }

  componentDidMount = () => {
    this.fetchStocks()
  }

  renderStocks = () => {
    let rows = this.state.stocks.map(stock => <Stock {...stock} handleClick={this.handleClick} />)
    switch (this.state.sortBy) {
      case 'Alphabetically':
        rows = rows.sort((a, b) => (a.props.name > b.props.name) ? 1 : -1)
        break;
      case 'Price':
        rows = rows.sort((a, b) => (a.props.price > b.props.price) ? 1 : -1)
        break;
    }
    rows = rows.filter(stock => stock.props.type.includes(this.state.filterBy))
    return rows
  }

  handleFilterChange = (e) => {
    this.setState({
      ...this.state,
      filterBy: e.target.value
    })
  }

  handleSortChange = (e) => {
    this.setState({
      ...this.state,
      sortBy: e.target.value
    })
  }

  handleClick = (props) => {

    if(props.owned){
      const sellStock = () => {
        this.state.stocks.map(stock => {if(stock.id === props.id){
          stock.owned = false
          return stock
        }else{
          return stock
        }
      })
    }
  
        this.setState({
          stock: sellStock()
        })
    } else{

    const buyStock = () => {
      this.state.stocks.map(stock => {if(stock.id === props.id){
        stock.owned = true
        return stock
      }else{
        return stock
      }
    })
  }

      this.setState({
        stock: buyStock()
      })
    }
  }

  render() {
    return (
      <div>
        <SearchBar handleFilterChange={this.handleFilterChange} handleSortChange={this.handleSortChange} />

          <div className="row">
            <div className="col-8">

              <StockContainer dowJones={this.renderStocks} handleClick={this.handleBuyClick}/>

            </div>
            <div className="col-4">

              <PortfolioContainer myPortfolio={this.renderStocks} handleClick={this.handleSellClick}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
