import React from "react";


class TodoForm extends React.Component {
    constructor() {
    super();
    // console.log(props)
    this.state = {
        todoInput: "",
    }
}

captureTodo =(event)=> {
    this.setState({
        [event.target.name]: event.target.value,
    })
}

submitTodo = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.todoInput)
    this.setState({
        todoInput: "",
    })

}
    render() {
        return (
            <form onSubmit={this.submitTodo}>
                <input 
                name="todoInput"
                onChange={this.captureTodo}
                value={this.state.todoInput}
                type="text"
                />
                <button>Submit</button>
                <button>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm
