import React from 'react';
import { Icon } from 'semantic-ui-react'

export default (props) => (
  <div {...props}>
    {props.done ? <Icon name="circle outline check" color="teal" /> : <Icon name="circle outline" />}
  </div>
);
