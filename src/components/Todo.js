import React from "react";

class Todo extends React.Component {

  render() {
    return (
      <div className={`todo${this.props.item ? ' completed' : ""}`}>
        <p>{this.props.task}</p>
      </div>
    );
  }
}

export default Todo;
