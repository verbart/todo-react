import React from 'react'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Button,
} from 'semantic-ui-react';

export default () => (
  <Menu fixed='top' size='small'>
    <Container>
      <Menu.Item as='a' header>
        <img size='mini' src='http://react.semantic-ui.com/logo.png'  />
      </Menu.Item>

      <Menu.Menu position='right'>
        <Menu.Item>
          <Button primary>Sign-in</Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);
