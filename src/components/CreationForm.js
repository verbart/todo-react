import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import { TextField } from 'redux-form-material-ui'
import { addTask } from '../actions/index';

@connect(state => ({
  tasksCounter: state.tasks.length + 1
}), dispatch => ({
  addTask: data => dispatch(addTask(data))
}))

@reduxForm({
  form: 'addTask'
})

class CreationForm extends Component {
  render() {
    const { tasksCounter, handleSubmit } = this.props;

    return (
      <Form name="addTask" onSubmit={ handleSubmit(this.handleSubmit) }>
        <Field
          component={ TextField }
          name="name"
          required
          placeholder="Enter task name..."
        />
        <Button variant="contained" color="primary">Add #{ tasksCounter }</Button>
      </Form>
    );
  }

  handleSubmit = (fields) => {
    this.props.addTask({
      id: Date.now(),
      name: fields.name
    });

    this.props.reset();
  };
}

export default CreationForm;
