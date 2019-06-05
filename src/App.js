import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      list: this.localStorageList(),
      task: ''
    }
  }

  localStorageList = () => {
    const localList = localStorage.getItem('list')
    if (localList) {
      return JSON.parse(localList);
    }
    return [];
  }
  
  inputChangeHandler = event => {
    this.setState({ task: event.target.value });
  };

  formSubmitHandler = event => {
    event.preventDefault();
    if(this.state.task !== ''){
    let newTask = {
      task: this.state.task,
      completed: false,
      id: Date.now()
    }
    this.setState(prevState => {
      localStorage.setItem('list', JSON.stringify([...prevState.list, newTask]));
      return {
        list: [...prevState.list, newTask],
        task: ''
      };
    });
    }
  };

  completeTask = i => {
    this.setState(prevState => {
      const list = prevState.list.map((item, j) => { 
        if(j === i) {
          let newTask = {
            task: item.task,
            completed: !item.completed,
            id: item.id
          }
          return newTask
        } else {
          return item
        }
      });
      return {
        list
      };
    })

  };

  clearComplete = event => {
    event.preventDefault();
    this.setState(prevState => {
      const list = prevState.list.filter(item => {
        return !item.completed
      })
      localStorage.setItem('list', JSON.stringify(list));
      return {
        list,
      };
    })
    
  };


  render() {
    return (
      <div className={"appContainer"}>
        <TodoForm 
          submitFunction={this}
        />
        <TodoList
          list={this.state.list} 
          function={this.completeTask}
        />
      </div>

    );
  }
}


export default App;
