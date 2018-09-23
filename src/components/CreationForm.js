import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Field, reduxForm } from 'redux-form';
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
          component="input"
          name="name"
          required
          placeholder="Enter task name..."
        />
        <button>Add #{ tasksCounter }</button>
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
