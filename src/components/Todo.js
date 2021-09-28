import React from "react";
export default class Todo extends React.Component {
  cb_onClick = (event) => {
    event.stopPropagation();
    this.props.cb_modifyTask(this.props.data);
  };

  render() {
    return (
      <div onClick={this.cb_onClick}>
        <p>
          {this.props.data.id} - {this.props.data.task} -{" "}
          {this.props.data.completed ? "true" : "false"}
        </p>
      </div>
    );
  }
}
/*
- `<Todo />` is a component that takes in the `todo` data and displays the task to the screen.
*/
