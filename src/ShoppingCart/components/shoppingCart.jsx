import React, { Component } from "react";

import NavBar from "./navbar";
import Counters from "./counters";

class ShoppingCart extends Component {
  state = {
    items: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleReset = () => {
    const items = this.state.items.filter((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ items });
  };

  handleDelete = (counterId) => {
    const items = this.state.items.filter((c) => c.id !== counterId);
    this.setState({ items });
  };

  handleIncrement = (counterId) => {
    const items = [...this.state.items];
    items[counterId - 1].value++;
    this.setState({ items });
  };

  handleDecrement = (counterId) => {
    const items = [...this.state.items];
    if (items[counterId - 1].value !== 0) {
      items[counterId - 1].value--;
    }
    this.setState({ items });
  };

  render() {
    return (
      <>
        <NavBar totalCounters={ this.state.items.filter(c => c.value > 0).length } />
        <main className="container">
          <Counters
            items={this.state.items}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </>
    );
  }
}

export default ShoppingCart;
