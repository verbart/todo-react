import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react'
import Task from './Task';

class TaskList extends Component {
  render() {
    return (
      <List divided selection verticalAlign='middle' size='big'>
        {this.props.tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </List>
    );
  }
}

TaskList = connect(state => ({
  tasks: state.tasks.taskList
}))(TaskList);

export default TaskList;
