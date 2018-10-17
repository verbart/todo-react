import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react'
import CreationForm from './CreationForm';
import TaskList from './TaskList';

class App extends Component {
  render() {
    return (
      <Container text>
        <Segment.Group>
          <Segment.Group>
            <CreationForm/>
          </Segment.Group>

          <Segment.Group stacked>
            <TaskList/>
          </Segment.Group>
        </Segment.Group>
      </Container>
    );
  }
}

export default App;
