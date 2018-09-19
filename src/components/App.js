import React, { Component } from 'react';
import CreationForm from './CreationForm/CreationForm';

class App extends Component {
  state = {
    taskName: '',
    tasks: [ 'Learn React' ]
  };

  render() {
    return (
      <div className="App">
        <CreationForm onSubmit={ this.createTask } />

        <ul className="taskList">
          {this.state.tasks.map((task, index) => (
            <li key={ index }>
              { task }
              &nbsp;
              <button>edit</button>
              <button onClick={ this.deleteTask }>delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  createTask = (task) => {
    this.setState({
      tasks: [ ...this.state.tasks, task ]
    });
  };

  deleteTask = (task) => {
    const tasks = this.state.tasks;
    const taskIndex = tasks.indexOf(task);

    tasks.splice(taskIndex, 1);

    this.setState({
      tasks: tasks
    });
  };
}

export default App;
