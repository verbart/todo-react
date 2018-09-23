import React, { Component } from 'react';
import CreationForm from './CreationForm';
import TaskList from './TaskList';

class App extends Component {
  render() {
    return (
      <div>
        <CreationForm/>
        <TaskList/>
      </div>
    );
  }
}

export default App;
