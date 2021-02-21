import React from 'react'

const Todos = ({todos,deleteTodo}) => {

    const todoList = todos.length ? (
      todos.map(todo => {
          return (
            <div className="list-group mt-2" key={todo.id}>
            <div className="list-group-item text-danger" onClick={() => {deleteTodo(todo.id)}}>{todo.content}</div>
            </div>
          )
      })
    ) : ( <h3 className="text-info">You have no todo's left, Yay!</h3> ) ;

    return (
        <div>
            {todoList}
        </div>
    )
}

export default Todos
