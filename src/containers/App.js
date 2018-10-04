import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import MainHeader from '../components/MainHeader';
import TasksPage from './TasksPage';
import LoginPage from './LoginPage';

class App extends Component {
  render() {
    return (
      <div>
        <MainHeader/>

        <Switch>
          <Route path="/" exact render={ () => <TasksPage/> } />
          <Route path="/login" render={ () => <LoginPage/> } />
        </Switch>
      </div>
    );
  }
}

export default App;
