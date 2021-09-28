import React from "react";
export default class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  cb_onSubmit = (event) => {
    event.preventDefault();

    //return data to App.js
    this.props.cb_addNewTask({
      task: this.state.input,
      completed: false,
      id: Date.now(),
    });

    //reset form
    this.setState({ input: "" });
  };

  cb_onChange = (event) => {
    console.log("Form.js event.target.value = ", event.target.value);
    this.setState({ input: event.target.value });
  };
  render() {
    return (
      <form onSubmit={this.cb_onSubmit}>
        <h3>TodoForm.js</h3>
        <input
          name="input"
          value={this.state.input}
          autoFocus
          onChange={this.cb_onChange}
        />
      </form>
    );
  }
}

/*
- `<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.
  - Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list.
  - Once a todo is submitted, the Todo List should re-render and show the added todo.

*/
