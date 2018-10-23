import React, { Fragment } from 'react';
import { Container, Segment } from 'semantic-ui-react'
import MainHeader from './MainHeader';
import CreationForm from './CreationForm';
import TaskList from './TaskList';

export default () => (
  <Fragment>
    <MainHeader/>

    <Container text style={{ paddingTop: '7em' }}>
      <CreationForm/>

      <Segment.Group stacked>
        <TaskList/>
      </Segment.Group>
    </Container>
  </Fragment>
);
