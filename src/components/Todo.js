import React from "react";
export default class Todo extends React.Component {
  render() {
    return (
      <div>
        <h3>Todo.js</h3>
        <p>
          {this.props.data.id} - {this.props.data.task}
        </p>
      </div>
    );
  }
}
/*
- `<Todo />` is a component that takes in the `todo` data and displays the task to the screen.
*/
