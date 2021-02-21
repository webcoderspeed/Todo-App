import React, { Component } from 'react';
import AddTodo from './AddTodo';
import Todos from './Todos'

class App extends Component {
  state = {
    todos : [
      { id: 1, content: 'buy some milk'},
      { id: 2, content: 'play pubg'},
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random()
    const todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className='container mt-3 ml-auto mr-auto mb-2 w-50'>
        <h1 className=" text-primary">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo = {this.addTodo} />
      </div>
    );
  }
}

export default App;