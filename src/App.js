import { Component } from "react";
import Form from "./components/Form";
import "./App.css";
import initialTodos from "./todos.json";

class App extends Component {
  state = {
    todos: initialTodos,
    filter: "",
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
        <Form />
      </>
    );
  }
}

export default App;
