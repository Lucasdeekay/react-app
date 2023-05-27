import React, { Component } from "react";

import Card from "./card";
import Form from "./form";
import List from "./list";

class TodoList extends Component {
  state = {
    tasks: [],
    counter: 0,
    display: "d-none",
  };

  handleSubmit = (e, task, time, reminder, handleClick) => {
    e.preventDefault();
    const counter = this.state.counter + 1;
    this.setState({ counter });
    const tasks = [...this.state.tasks, {
      id: this.state.counter,
      task: task,
      time: time,
      reminder: reminder,
    }]
    this.setState({ tasks });
    handleClick();
  };

  handleDelete = (id) => {
    const tasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({ tasks });
  };

  handleDisplay = (text) => {
    let display;
    if (text === "Close") {
      display = "d-none";
    } else {
      display = "d-block";
    }
    this.setState({ display });
  };

  render() {
    return (
      <>
        <div className="container my-5 text=center">
          <Card onChange={this.handleDisplay}>
            <Form display={this.state.display} onSubmit={this.handleSubmit}/>
            <List tasks={this.state.tasks} onDelete={this.handleDelete}/>
          </Card>
        </div>
      </>
    );
  }
}

export default TodoList;
