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

  addTodos =(todo)=>{

    let updatedTodos=[...this.state.todos,{
      id:this.state.todos.length+1,todo:todo
    }];
    this.setState({
      todos:updatedTodos
    })
  }

  render() {
    let todos = this.state.todos;
    let deleteTodos=this.deleteTodos;
    let addTodos=this.addTodos;
    return (

      <div className="App">
        <InputBox addTodos={addTodos} ></InputBox>
        <TodoList todos={todos}  deleteTodos={deleteTodos}></TodoList>
      </div>
    );
  }
}

export default App;
