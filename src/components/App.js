import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainHeader from './MainHeader';
import Tasks from '../pages/Tasks';
import Login from '../pages/Login';

export default () => (
  <BrowserRouter>
    <>
      <MainHeader/>

      <div style={{ paddingTop: '7em' }}>
        <Route exact path="/" component={ Tasks } />
        <Route path="/login" component={ Login } />
      </div>
    </>
  </BrowserRouter>
);
