// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        <h3>TodoList.js</h3>
        {this.props.data &&
          this.props.data.map((eachTask) => {
            return (
              <Todo
                key={eachTask.id}
                data={eachTask}
                cb_modifyTask={this.props.cb_modifyTask}
              />
            );
          })}
      </div>
    );
  }
}

/*
- `<TodoList />` receives your Todos array and iterates over the list generating a new `<Todo />` for each element in the array.
*/
