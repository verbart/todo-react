import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, List, Dimmer, Loader } from 'semantic-ui-react'
import injectSheet from 'react-jss'
import { updateTask, updateLocalTask, removeTask } from '../../actions/index';
import Checkbox from './Checkbox';
import Actions from './Actions';
import EditTaskForm from './EditTaskForm';
import styles from './styles';

class Task extends Component {
  startEdit = ({ id }) => {
    this.props.updateLocalTask({ id, isEdit: true });
  };
  cancelEdit = () => {
    const { task, updateLocalTask } = this.props;

    updateLocalTask({ id: task.id, isEdit: false, isLoading: false });
  };
  handleUpdate = () => {
    this.editFormRef.handleSubmit();
  };
  removeTask = (task) => {
    this.props.removeTask(task);
  };
  setEditFormRef = (formRef) => {
    this.editFormRef = formRef;
  };

  render() {
    const {
      classes,
      task,
      updateTask
    } = this.props;

    return (
      <Dimmer.Dimmable
        as={List.Item}
        dimmed={task.isLoading}
        blurring
        onClick={() => updateTask({ ...task, done: !task.done })}
      >
        <Dimmer active={task.isLoading} inverted>
          <Loader/>
        </Dimmer>

        <Grid>
          <Grid.Row className='equal width' verticalAlign='middle'>
            <Grid.Column>
              <List.Content className={classes.taskContent}>
                <Checkbox done={task.done ? 1 : 0} />

                {task.isEdit ?
                  <EditTaskForm
                    task={task}
                    onSetEditFormRef={this.setEditFormRef}
                    onUpdated={this.cancelEdit}
                  />
                  :
                  <span dangerouslySetInnerHTML={{ __html: task.name.split('\n').join('<br>') }} />
                }

              </List.Content>
            </Grid.Column>

            <Grid.Column className='right aligned' style={{ flexGrow: 0, width: 'auto' }}>
              <Actions
                isEdit={task.isEdit}
                task={task}
                startEdit={this.startEdit}
                cancelEdit={this.cancelEdit}
                updateTask={this.handleUpdate}
                removeTask={this.removeTask}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Dimmer.Dimmable>
    );
  }
}

Task = injectSheet(styles)(Task);

Task = connect(null, {
  updateTask,
  updateLocalTask,
  removeTask
})(Task);

export default Task;
