import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CreationForm from './CreationForm';
import TaskList from './TaskList';

class App extends Component {
  render() {
    return (
      <div>
        <Grid container justify="center">
          <Grid item xs={12} sm={10} md={8} lg={5}>
            <CreationForm/>
            <TaskList/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
