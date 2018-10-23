import React from 'react';
import { Container, Segment } from 'semantic-ui-react'
import CreationForm from '../components/CreationForm';
import TaskList from '../components/TaskList';

export default () => (
  <Container text>
    <CreationForm/>

    <Segment.Group stacked>
      <TaskList/>
    </Segment.Group>
  </Container>
);
