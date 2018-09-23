import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from './Task';

@connect((state) => ({
  tasks: state.tasks
}))

class TaskList extends Component {
  render() {
    return (
      <ul className="taskList">
        {this.props.tasks.map((task, index) => (
          <Task
            key={ task.id }
            task={ task }
          />
        ))}
      </ul>
    );
  }
}

export default TaskList;
