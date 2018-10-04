import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Task from './Task';

@connect((state) => ({
  tasks: state.tasks
}))

class TaskList extends Component {
  render() {
    const { tasks } = this.props;

    return (
        <List>
          {tasks.map((task, index)=> (
            <div key={ task.id }>
              <Task task={ task } />
              { ++index < tasks.length && <Divider /> }
            </div>
          ))}
        </List>
    );
  }
}

export default TaskList;
