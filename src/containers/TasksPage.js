import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CreationForm from '../components/Tasks/CreationForm';
import TaskList from '../components/Tasks/TaskList';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  layout: {
    marginTop: theme.spacing.unit * 8
  }
});

@withStyles(styles)

export default class extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container justify="center" className={ classes.layout }>
        <Grid item xs={12} sm={10} md={8} lg={5}>
          <CreationForm/>

          <Paper>
            <TaskList/>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
