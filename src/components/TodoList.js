// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react"
import Todo from "./Todo"

class TodoList extends React.Component {

    render() {
        return (
            <div className="TodoListContainer">
                {this.props.todoArray.map(item => {
                   return ( 
                   <Todo key={item.id} task={item.task} id={item.id} completed={item.completed} />
                   )
                })}
                
            </div>
        )
    }
}

export default TodoList