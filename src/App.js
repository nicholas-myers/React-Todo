import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

const todoArray = [
  {
    task: "example task",
    id: Date.now(),
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoArray,
    };
  }

  addTodo = (inputtedTodo) => {
    const newTodo = {
      task: inputtedTodo,
      id: Date.now(),
      completed: false,
    }
    this.setState({
      todoArray: [...todoArray, newTodo]
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todoArray={this.state.todoArray} />
      </div>
    );
  }
}

export default App;
