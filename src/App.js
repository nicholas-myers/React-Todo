import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";

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
      todoInput: "",
    };
  }

  captureTodo = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitTodo = (event) => {
    event.preventDefault();
    this.addTodo(this.state.todoInput);
    this.setState({
      todoInput: "",
    });
  };

  addTodo = (inputtedTodo) => {
    const newTodo = {
      task: inputtedTodo,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      todoArray: [...this.state.todoArray, newTodo],
    });
  };

  toggleCompleted = (clickedId) => {
    const newTaskList = this.state.todoArray.map((item) => {
      // loop and find what I click
      // then toggle

      if (item.id === clickedId) {
        //toggle completed
        return {
          //dont mutate - create a new one
          ...item,
          completed: !item.completed,
        };
      } else {
        return item;
      }
    });

    this.setState({
      todoArray: newTaskList
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          captureTodo={this.captureTodo}
          addTodo={this.addTodo}
          todoInput={this.state.todoInput}
          submitTodo={this.submitTodo}
        />
        <TodoList
          todoArray={this.state.todoArray}
          toggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;
