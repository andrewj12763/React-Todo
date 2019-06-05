import React from 'react';
import Todo from './Todo';
import './Todo.css';

function TodoList(props) {
    return (
        <div className={"todoListContainer"} >
            {props.list.map((todo, index) => {
                return (
                    <Todo 
                        task={todo.task}
                        completed={todo.completed}
                        key={todo.id} 
                        function={() => props.function(index)}
                    />
                )
            })}
        </div>
    );
}







export default TodoList;