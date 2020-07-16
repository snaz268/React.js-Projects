import React, { Component } from 'react';

//We need to store the state as user types in new items in the toso list. So this has to be a class based component
class AddTodo extends Component {
    state={
        content:''
    }
    handleChange=(e)=>{
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        //console.log(this.state.content);
        this.props.addTodo(this.state)
        this.setState({
            content:''
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Add new todo: </label>
                <input type="text" onChange={this.handleChange} value={this.state.content}></input>
            </form>
        )
    }
}

export default AddTodo;