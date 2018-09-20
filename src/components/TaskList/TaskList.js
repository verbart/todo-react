import React, { Component } from 'react';
import Task from '../Task/Task';

class TaskList extends Component {
  render() {
    return (
      <ul className="taskList">
        {this.props.tasks.map((task, index) => (
          <Task
            key={ task.id }
            task={ task }
            onTaskDelete={ this.props.onTaskDelete }
            onTaskUpdate={ this.props.onTaskUpdate }
          />
        ))}
      </ul>
    );
  }
}

export default TaskList;
