import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

export default () => (
  <Form size='large' style={{ maxWidth: 400, margin: '0 auto' }}>
    <Segment stacked>
      <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
      <Form.Input
        fluid
        icon='lock'
        iconPosition='left'
        placeholder='Password'
        type='password'
      />

      <Button color='teal' fluid size='large'>
        Login
      </Button>
    </Segment>
  </Form>
);
