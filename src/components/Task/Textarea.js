import React from 'react';
import TextAreaAutoSize from 'react-textarea-autosize';

export default ({ input, placeholder, onClick, autoFocus }) => (
  <TextAreaAutoSize
    {...input}
    placeholder={placeholder}
    onClick={onClick}
    autoFocus={autoFocus}
  />
);
