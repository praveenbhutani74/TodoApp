import React, { Component } from 'react';
import InputBox from "./components/InputBox/InputBox.jsx";
import TodoList from "./components/TodoList/TodoList.jsx";

class App extends Component {
  state = { 

    todos:[
      {id:"1",todo:"Learn Jsx"},
      {id:"2",todo:"Learn Css"}
    ]
   };

  deleteTodos = (id) => {
    let updatedTodos = this.state.todos.filter(function (todosObj) {
      if (todosObj.id === id) {
        return false;
      }
      return true;
    })

    this.setState({
      todos: updatedTodos
    })
  }


  render() {
    let todos = this.state.todos;
    let deleteTodos=this.deleteTodos;
    return (

      <div className="App">
        <InputBox></InputBox>
        <TodoList todos={todos}  deleteTodos={deleteTodos}></TodoList>
      </div>
    );
  }
}

export default App;
