import React from 'react';

function TodoForm(props) {
    return(
        <div className={"todoFormContainer"}>
            <form onSubmit={props.submitFunction.formSubmitHandler}>
                <input 
                    name="task" 
                    value={props.submitFunction.state.task} 
                    onChange={props.submitFunction.inputChangeHandler} 
                    placeholder="Add Task" 
                />
                <button type="submit">Add</button>
                <button type="submit" onClick={props.submitFunction.clearComplete}>Clear</button>
            </form>

        </div>
    )
}



export default TodoForm;