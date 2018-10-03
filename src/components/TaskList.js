import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import Task from './Task';

@connect((state) => ({
  tasks: state.tasks
}))

class TaskList extends Component {
  render() {
    return (
      <div>
        <List>
          {this.props.tasks.map(task => (
            <Task key={ task.id } task={ task } />
          ))}
        </List>
      </div>
    );
  }
}


// class TaskList extends Component {
//   render() {
//     return (
//       <ul className="taskList">
//         {this.props.tasks.map((task, index) => (
//           <Task
//             key={ task.id }
//             task={ task }
//           />
//         ))}
//       </ul>
//     );
//   }
// }

export default TaskList;
