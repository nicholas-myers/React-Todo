import React from "react";

class Todo extends React.Component {

  render() {
    return (
      <div className="Todo">
        <p>{this.props.task}</p>
      </div>
    );
  }
}

export default Todo;
