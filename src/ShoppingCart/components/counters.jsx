import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {

  render() {
    // Object destructuring
    const { items, onReset, onDelete, onIncrement, onDecrement } = this.props; 
    return (
      <>
        <button
          onClick={onReset}
          className="btn btn-sm btn-primary m-2"
        >
          Reset
        </button>
         {items.map((item) => (
          <Counter
            key={item.id}
            counter={item}
            onIncrement={ onIncrement }
            onDecrement={ onDecrement }
            onDelete={ onDelete }
          />
        ))}
      </>
    );
  }
}

export default Counters;
