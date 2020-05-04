import React from "react";


class TodoForm extends React.Component {
    constructor() {
    super();
    // console.log(props)
}




    render() {
        return (
            <form onSubmit={this.submitTodo}>
                <input 
                name="todoInput"
                onChange={this.props.captureTodo}
                value={this.props.todoInput}
                type="text"
                />
                <button>Add New Task</button>
                <button>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm
