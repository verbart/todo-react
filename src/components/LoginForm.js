import React, { Component } from 'react';
import { Form, Input, Button, Segment, Label } from 'semantic-ui-react';
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
      .required('Required'),

    password: yup.string()
      // eslint-disable-next-line
      .min(8, 'Must be longer than ${min} characters')
      .required('Required')
  }),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
    }, 1000);
  }
})

export default class extends Component {
  render() {
    const {
      values,
      errors,
      handleChange,
      handleBlur,
      handleSubmit,
    } = this.props;

    return (
      <Form
        size='large'
        style={{ maxWidth: 400, margin: '0 auto' }}
        onSubmit={handleSubmit}
        noValidate
      >
        <Segment stacked>
          <Form.Field>
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

            {errors.email && <Label basic color='red' pointing>{errors.email}</Label>}
          </Form.Field>

          <Form.Field>
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

            {errors.password && <Label basic color='red' pointing>{errors.password}</Label>}
          </Form.Field>

          <Button color='teal' fluid size='large' type='submit'>
            Login
          </Button>
        </Segment>
      </Form>
    );
  }
}
