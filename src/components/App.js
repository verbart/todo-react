import React, { Component } from 'react';
import CreationForm from './CreationForm/CreationForm';
import TaskList from './TaskList/TaskList';

class App extends Component {
  state = {
    taskName: '',
    tasks: [
      {
        id: Date.now(),
        name: 'Learn React'
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <CreationForm onSubmit={ this.addTask } />
        <TaskList tasks={ this.state.tasks } onTaskDelete={ this.deleteTask } />
      </div>
    );
  }

  addTask = (task) => {
    this.setState({
      tasks: [ ...this.state.tasks, task ]
    });
  };

  deleteTask = (task) => {
    this.setState({
      tasks: this.state.tasks.filter(item => item.id !== task.id)
    });
  };
}

export default App;
