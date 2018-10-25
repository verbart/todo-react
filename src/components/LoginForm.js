import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, Segment } from 'semantic-ui-react'
import { InputField } from 'react-semantic-redux-form';

@reduxForm({
  form: 'loginForm'
})

export default class extends Component {
  login(user) {
    console.log(user);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Form
        size='large'
        style={{ maxWidth: 400, margin: '0 auto' }}
        onSubmit={handleSubmit(this.login)}
      >
        <Segment stacked>
          <Field
            component={InputField}
            name="email"
            type="email"
            placeholder="E-mail address"
            required
            fluid
            icon="user"
            iconPosition="left"
          />

          <Field
            component={InputField}
            name="password"
            type="password"
            placeholder="Password"
            required
            fluid
            icon="lock"
            iconPosition="left"
          />

          <Button color="teal" fluid size="large">
            Login
          </Button>
        </Segment>
      </Form>
    );
  }
}
