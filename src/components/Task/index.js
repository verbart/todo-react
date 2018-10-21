import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, List } from 'semantic-ui-react'
import { Form, Field, reduxForm, getFormValues } from 'redux-form';
import injectSheet from 'react-jss'
import { setEditedTask, updateTask, removeTask } from '../../actions/index';
import Checkbox from './Checkbox';
import Actions from './Actions';
import TextArea from './Textarea';
import styles from './styles';

@connect(state => ({
  initialValues: state.tasks.editedTask,
  editedTask: getFormValues('editTask')(state)
}), {
  setEditedTask,
  updateTask,
  removeTask
})

@reduxForm({
  form: 'editTask',
  enableReinitialize: true,
  keepDirtyOnReinitialize: false
})

@injectSheet(styles)

export default class Task extends Component {
  isEdit() {
    return this.props.editedTask && this.props.editedTask.id === this.props.task.id;
  }
  startEdit = (task) => {
    this.props.setEditedTask(task);
  };
  cancelEdit = () => {
    this.props.setEditedTask();
  };
  handleUpdate = (task = this.props.editedTask) => {
    this.props.updateTask({ ...this.props.task, ...task });
    this.cancelEdit();
  };
  removeTask = (task) => {
    this.props.removeTask(task);
  };

  render() {
    const isEdit = this.isEdit();
    const { classes, task, change, editedTask } = this.props;
    const name = editedTask ? editedTask.name : 'wtf';

    return (
      <List.Item onClick={() => this.props.updateTask({ ...task, done: !task.done })}>
        <Grid>
          <Grid.Row className="equal width" verticalAlign="middle">
            <Grid.Column>
              <List.Content className={classes.listContent}>
                <Checkbox done={task.done ? 1 : 0} />

                <Form
                  id={'editTask_' + task.id}
                  name="editTask"
                  className={classes.form}
                  onSubmit={this.props.handleSubmit(this.handleUpdate)}
                >
                  {isEdit ?
                    <Field
                      defaultValue="Just a single line..."
                      component={TextArea}
                      name="name"
                      placeholder='Enter task name...'
                      onClick={(e) => e.stopPropagation()}
                      autoFocus
                      onFocus={() => change('name', name + ' ')}
                    />
                    :
                    task.name.split('\n').join('<br>')
                  }
                </Form>
              </List.Content>
            </Grid.Column>

            <Grid.Column className="right aligned" style={{ flexGrow: 0, width: 'auto' }}>
              <Actions
                isEdit={isEdit}
                task={task}
                startEdit={this.startEdit}
                cancelEdit={this.cancelEdit}
                updateTask={this.handleUpdate}
                removeTask={this.removeTask}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </List.Item>
    );
  }
}
