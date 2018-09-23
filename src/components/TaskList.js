import React, { Component } from 'react';
import Task from './Task';

class TaskList extends Component {
  render() {
    return (
      <ul className="taskList">
        {this.props.tasks.map((task, index) => (
          <Task
            key={ task.id }
            task={ task }
            onTaskUpdate={ this.props.onTaskUpdate }
            onTaskCompletionToggle={ this.props.onTaskCompletionToggle }
            onTaskDelete={ this.props.onTaskDelete }
          />
        ))}
      </ul>
    );
  }
}

export default TaskList;
