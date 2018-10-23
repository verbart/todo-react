import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu, Button } from 'semantic-ui-react';

export default () => (
  <Menu fixed='top' size='small'>
    <Container>
      <Menu.Item as={Link} to="/">
        <img size='mini' src='http://react.semantic-ui.com/logo.png' alt="logo" />
      </Menu.Item>

      <Menu.Menu position='right'>
        <Menu.Item>
          <Button as={Link} to="/login" primary>Sign-in</Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);
