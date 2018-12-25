import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import { Form, Input, Button } from 'semantic-ui-react';
import { addTask } from '../actions/index';
import * as yup from "yup";

@connect(state => ({
  tasksCounter: state.tasks.taskList.length + 1
}), {
  addTask
})

@withFormik({
  mapPropsToValues: () => ({
    name: ''
  }),

  validationSchema: yup.object().shape({
    name: yup.string().required('Task name is required')
  }),

  handleSubmit: (values, { props, resetForm }) => {
    setTimeout(() => {
      props.addTask({
        id: Date.now(),
        ...values
      });

      resetForm();
    }, 1000);
  }
})

class CreationForm extends Component {
  componentDidMount() {
    this.props.validateForm();
  }

  render() {
    const {
      values,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
      isValid,
      tasksCounter
    } = this.props;

    return (
      <Form onSubmit={handleSubmit} noValidate loading={isSubmitting}>
        <Input
          name='name'
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isSubmitting}
          fluid
          action
          focus
          placeholder='Enter task name...'
          required
        >
          <input />
          <Button
            type='submit'
            color='teal'
            disabled={!isValid}
          >
            Add #{tasksCounter}
          </Button>
        </Input>
      </Form>
    );
  }
}

export default CreationForm;
