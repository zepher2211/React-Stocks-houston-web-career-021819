import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  // renderStocks = () => {

  //   let rows = this.props.dowJones.map(stock => <Stock {...stock} handleClick={this.props.handleClick} />)
  //   console.log(rows)
  //   switch (this.props.sortBy) {
  //     case 'Alphabetically':
  //       rows = rows.sort((a, b) => (a.props.name > b.props.name) ? 1 : -1)
  //       break;
  //     case 'Price':
  //       rows = rows.sort((a, b) => (a.props.price > b.props.price) ? 1 : -1)
  //       break;
  //   }
  //   switch (this.props.filterBy) {
  //     case 'Tech':
  //     rows = rows.filter(stock => stock.props.type === 'Tech')
  //       break;
  //     case 'Sportswear':
  //     rows = rows.filter(stock => stock.props.type === 'Sportswear')
  //       break;
  //     case 'Finance':
  //       rows = rows.filter(stock => stock.props.type === 'Finance')
  //       break;
  //   }
  //   return rows
  // }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.dowJones()
        }
      </div>
    );
  }

}

export default StockContainer;
