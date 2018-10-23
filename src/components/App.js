import React, { Fragment } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import MainHeader from './MainHeader';
import TasksPage from '../pages/Tasks';

export default () => (
  <BrowserRouter>
    <Fragment>
      <MainHeader/>

      <div style={{ paddingTop: '7em' }}>
        <Route exact path="/" component={ TasksPage } />
      </div>
    </Fragment>
  </BrowserRouter>
);
