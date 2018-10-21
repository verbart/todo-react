import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react'
import Task from './Task';

@connect(state => ({
  tasks: state.tasks.taskList
}))

class TaskList extends Component {
  render() {
    return (
      <List divided selection verticalAlign="middle" size="big">
        {this.props.tasks.map((task, index) => (
          <Task key={task.id} task={task} />
        ))}
      </List>
    );
  }
}

export default TaskList;
