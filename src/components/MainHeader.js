import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" style={{ flexGrow: 1 }} >
            <Button color="inherit" component={ Link } to="/">Tasks</Button>
          </Typography>


          <Button color="inherit" component={ Link } to="/login">Login</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default App;
