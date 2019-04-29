import React, { Component } from 'react';

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.myPortfolio().filter(stock => stock.props.owned)
          }
      </div>
    );
  }

}

export default PortfolioContainer;
