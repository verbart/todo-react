import React, { Component } from 'react';
import { Form, Input, Button, Segment, Label, Message } from 'semantic-ui-react';
import { withFormik } from 'formik';
import * as yup from 'yup';

@withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: ''
  }),

  validationSchema: yup.object().shape({
    email: yup.string()
      .email('Invalid email address')
      .required('Email is required'),

    password: yup.string()
      // eslint-disable-next-line
      .min(8, 'Must be longer than ${min} characters')
      .required('Password is required')
  }),

  handleSubmit: (values, { props, setSubmitting, setErrors }) => {
    if (props.isSubmitting) {
      return;
    }

    setTimeout(() => {
      setErrors({ login: true });

      setSubmitting(false);
    }, 1000);
  }
})

export default class extends Component {
  render() {
    const {
      values,
      errors,
      dirty,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
      isValid
    } = this.props;

    return (
      <Form
        size='large'
        style={{ maxWidth: 400, margin: '0 auto' }}
        onSubmit={handleSubmit}
        noValidate
        error={dirty && !isValid}
        loading={isSubmitting}
      >
        <Segment stacked>
          {errors.login && <Message
            error
            header='Action Forbidden'
            content='You have entered an invalid pair of email and password'
          />}

          <Form.Field error={!!(touched.email && errors.email)}>
            <Input
              name='email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type='email'
              placeholder='E-mail address'
              required
              fluid
              icon='user'
              iconPosition='left'
            />

            {touched.email && errors.email && <Label basic color='red' pointing>{errors.email}</Label>}
          </Form.Field>

          <Form.Field error={!!(touched.password && errors.password)}>
            <Input
              name='password'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              type='password'
              placeholder='Password'
              required
              fluid
              icon='lock'
              iconPosition='left'
            />

            {touched.password && errors.password && <Label basic color='red' pointing>{errors.password}</Label>}
          </Form.Field>

          <Button color='teal' fluid size='large' type='submit'>
            Login
          </Button>
        </Segment>
      </Form>
    );
  }
}
