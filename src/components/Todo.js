import React from "react";

class Todo extends React.Component {
    constructor(props) {
        super();
        // console.log(props)
    }

    render() {
        return(
        <div className="Todo">{this.props.task}</div>
        )
    }
}

export default Todo