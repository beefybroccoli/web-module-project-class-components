import React from "react";
import { sample_data } from "./components/sample_data";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

class App extends React.Component {
  constructor() {
    super();
    this.state = { array: [...sample_data] };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  /**
   * cb_addNewTask
   */
  cb_addNewTask = (input_object) => {
    this.setState({ array: [...this.state.array, input_object] });
  };

  /**
   *
   */
  cb_modifyTask = (input_object) => {
    this.setState({
      array: this.state.array.map((eachTask) => {
        if (input_object.id === eachTask.id) {
          return { ...eachTask, completed: !eachTask.completed };
        } else {
          return eachTask;
        }
      }),
    });
  };

  /** */

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm cb_addNewTask={this.cb_addNewTask} />
        <TodoList data={this.state.array} cb_modifyTask={this.cb_modifyTask} />
      </div>
    );
  }
}

export default App;

/*
- `<App />` will hold all the data needed for this project. It will also be the container for your Todo Components.
  - All of your application data will be stored here on `<App />`.
  - All of your `handler` functions should live here on `<App />`.
*/
