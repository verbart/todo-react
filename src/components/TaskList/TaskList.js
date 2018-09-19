import React, { Component } from 'react';

class TaskList extends Component {
  render() {
    return (
      <ul className="taskList">
        {this.props.tasks.map((task, index) => (
          <li key={ task.id }>
            { task.name }
            &nbsp;
            <button onClick={ () => this.props.onTaskDelete(task) }>delete</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default TaskList;
