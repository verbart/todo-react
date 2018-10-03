import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Field, reduxForm } from 'redux-form';
import Grid from '@material-ui/core/Grid';
import { TextField } from 'redux-form-material-ui'
import { addTask } from '../actions/index';

@connect(null, dispatch => ({
  addTask: data => dispatch(addTask(data))
}))

@reduxForm({
  form: 'addTask'
})

class CreationForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
        <Form name="addTask" onSubmit={ handleSubmit(this.handleSubmit) }>
          <Grid container justify="center">
            <Field
              name="name"
              required
              placeholder="Enter task name..."
              component={ TextField }
              fullWidth
              size="lg"
              margin="dense"
              variant="outlined"
            />
          </Grid>
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
