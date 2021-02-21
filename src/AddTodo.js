import React, { Component } from 'react';

class AddTodo extends Component {

    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state)
        this.setState({
            content: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className='form-group'>
                    <label htmlFor="Todo">Add New Todo</label>
                    <input className='form-control' type="text" id="content" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        );
    }
}

export default AddTodo;