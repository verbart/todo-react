import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, List } from 'semantic-ui-react'
import Task from './Task';

@connect((state) => ({
  tasks: state.tasks
}))

class TaskList extends Component {
  render() {
    return (
    <Container>
      <List divided selection verticalAlign="middle" size="big">
        {this.props.tasks.map((task, index) => (
          <Task key={task.id} task={task} />
        ))}
      </List>
    </Container>
    );
  }
}

export default TaskList;
