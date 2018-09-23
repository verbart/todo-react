import React, { Component } from 'react';
import CreationForm from './CreationForm';
import TaskList from './TaskList';

class App extends Component {
  state = {
    taskName: '',
    tasks: [
      {
        id: 1,
        name: 'Learn JavaScript',
        done: true
      },
      {
        id: 2,
        name: 'Learn React'
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <CreationForm
          onSubmit={ this.addTask }
          tasksCount={ this.state.tasks.length }
        />
        <TaskList
          tasks={ this.state.tasks }
          onTaskUpdate={ this.updateTask }
          onTaskCompletionToggle={ this.toggleCompletion }
          onTaskDelete={ this.deleteTask }
        />
      </div>
    );
  }

  addTask = (task) => {
    this.setState({
      tasks: [ ...this.state.tasks, task ]
    });
  };

  updateTask = (task) => {
    this.setState({
      tasks: this.state.tasks.map(item => item.id === task.id ? task : item)
    });
  };

  toggleCompletion = (task) => {
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (item.id === task.id) {
          item.done = !item.done;
        }

        return item
      })
    });
  };

  deleteTask = (task) => {
    this.setState({
      tasks: this.state.tasks.filter(item => item.id !== task.id)
    });
  };
}

export default App;
