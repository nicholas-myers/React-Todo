import React from "react";


class TodoForm extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.submitTodo}>
                <label>Input New Task:</label>
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
