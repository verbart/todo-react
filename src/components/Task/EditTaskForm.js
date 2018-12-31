import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react'
import { withFormik } from 'formik';
import injectSheet from 'react-jss'
import { updateTask } from '../../actions/index';
import TextAreaAutoSize from 'react-textarea-autosize';
import styles from './styles';
import * as yup from 'yup';

@connect(null, {
  updateTask
})

@withFormik({
  mapPropsToValues: () => ({
    name: ''
  }),

  validationSchema: yup.object().shape({
    name: yup.string().required('Task name is required')
  }),

  handleSubmit: (values, { props, resetForm, setSubmitting }) => {
    props.updateTask(
      { ...props.task, ...values },

      () => {
        resetForm();
        props.onUpdated();
      },
      (error) => {
        setSubmitting(false);
        console.log(error);
      }
    );
  }
})

@injectSheet(styles)

export default class Task extends Component {
  componentWillMount() {
    const {
      setValues,
      task
    } = this.props;

    setValues({ name: task.name });
  }

  render() {
    const {
      values,
      handleChange,
      handleBlur,
      handleSubmit,
      classes,
      onSetEditFormRef
    } = this.props;

    return (
      <Form
        ref={formRef => onSetEditFormRef(formRef)}
        className={classes.form}
        onSubmit={handleSubmit}
        noValidate
      >
        <TextAreaAutoSize
          name='name'
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          onClick={(e) => e.stopPropagation()}
          className={classes.textarea}
          placeholder='Enter task name...'
          rows={1}
          autoFocus
          required
        />
      </Form>
    );
  }
}
