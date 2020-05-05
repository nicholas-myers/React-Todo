import React from "react";

class Todo extends React.Component {

  render() {
    // console.log(this.props);
    return (
      <div
      className={`todo${this.props.completed ? " completed" : ""}`}>
        <p>{this.props.task}</p>
      </div>
    );
  }
}

export default Todo;
