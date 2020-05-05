// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react"
import Todo from "./Todo"

class TodoList extends React.Component {

    render() {
        return (
            <div className="todoListContainer">
                <h2>TASKS</h2>
                {this.props.todoArray.map(item => {
                   return ( 
                   <Todo toggleCompleted={this.props.toggleCompleted} key={item.id} task={item.task} id={item.id} completed={item.completed} index={item} />
                   )
                })}
                
            </div>
        )
    }
}

export default TodoList