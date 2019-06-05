import React from 'react';
import './Todo.css'

class Todo extends React.Component {
    constructor(props){
        super()
        this.myElement = null;

    }

    render(){
        return (
        <div 
            className={this.props.completed ? 'complete singleTodo' : 'incomplete singleTodo'} 
            onClick={this.props.function}
            ref={div => this.myElement = div}>
            <h3>{this.props.task}</h3>
        </div>

    );
    }
}

export default Todo;