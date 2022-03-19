import { Component } from "react";

import "./App.css";
import initialTodos from "./todos.json";

class App extends Component {
  state = {
    todos: initialTodos,
    inputValue: "input value",
    filter: "",
  };

  handleInputChange = (event) => {
    console.log(event.currentTarget.value);
    this.setState({ inputValue: event.currentTarget.value });
  };

  deleteToDo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  render() {
    const { todos, filter } = this.state;
    const totalTodoCount = todos.length;

    return (
      <>
        <h1>React Forms</h1>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.inputValue}
        />
      </>
    );
  }
}

export default App;
