import React from "react";

class Todo extends React.Component {
  constructor() {
    super();
    // console.log(props)
  }

  render() {
    return (
      <div className="Todo">
        <p>{this.props.task}</p>
      </div>
    );
  }
}

export default Todo;
