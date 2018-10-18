import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextArea } from 'react-semantic-redux-form';
import { Grid, List, Button } from 'semantic-ui-react'
import { Form, Field, reduxForm } from 'redux-form';
import injectSheet from 'react-jss'
import { setEditedTask, updateTask, removeTask } from '../../actions/index';
import Checkbox from './Checkbox';
import Actions from './Actions';
import styles from './styles';

@connect(state => ({
  editedTask: state.tasks.editedTask,
  initialValues: {
    name: ''
  }
}), dispatch => ({
  setEditedTask: payload => dispatch(setEditedTask(payload)),
  updateTask: payload => dispatch(updateTask(payload)),
  removeTask: payload => dispatch(removeTask(payload))
}))

@reduxForm({
  form: 'editTask'
})

@injectSheet(styles)

export default class Task extends Component {
  isEdit() {
    return this.props.editedTask && this.props.editedTask.id === this.props.task.id;
  }
  startEdit = (task) => {
    this.props.setEditedTask(task);
    this.props.change('name', task.name);
  };
  cancelEdit = () => {
    this.props.setEditedTask();
  };
  handleUpdate = (task) => {
    this.props.updateTask({ ...this.props.task, ...task });
    this.cancelEdit();
  };
  removeTask = (task) => {
    this.props.removeTask(task);
  };

  render() {
    const isEdit = this.isEdit();
    const { classes, task } = this.props;

    return (
      <List.Item onClick={() => this.props.updateTask({ ...task, done: !task.done })}>
        <Grid>
          <Grid.Row className="equal width" verticalAlign="middle">
            <Grid.Column>
              <List.Content className={classes.listContent}>
                <Checkbox done={task.done ? 1 : 0} />

                <Form
                  id={task.id}
                  name="editTask"
                  className={classes.form}
                  onSubmit={this.props.handleSubmit( this.handleUpdate )}
                >
                  {isEdit ?
                    <Field
                      component={TextArea}
                      name="name"
                      autoHeight
                      rows={1}
                      placeholder='Enter task name...'
                      onClick={(e) => e.stopPropagation()}
                    />
                    :
                    task.name
                  }
                </Form>
              </List.Content>
            </Grid.Column>

            <Grid.Column className="right aligned" style={{ flexGrow: 0, width: 'auto' }}>
              <List.Content>
                <Button.Group basic size='small' onClick={(e) => e.stopPropagation()}>
                  <Actions
                    isEdit={isEdit}
                    task={task}
                    cancelEdit={this.cancelEdit}
                    startEdit={this.startEdit}
                    removeTask={this.removeTask}
                  />
                </Button.Group>
              </List.Content>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </List.Item>
    );
  }
}
