import React, { Component } from 'react';

class TodoList extends Component {
    state = {}
    render() {
        let todo = this.props.todos;
        let deleteTodos=this.props.deleteTodos;
        console.log(todo);
        return (

            <div className="todos container">
                {todo.map(function (todoObj) {
                    return (
                        <div key={todoObj.id} className="todo input-group m-4">
                            <div className="form-control">{todoObj.todo}</div>
                            <button className="btn btn-danger" onClick={(e)=>{deleteTodos(todoObj.id)}}> Delete</button>
                        </div>


                    );
                })}


            </div>




        );
    }
}

export default TodoList;