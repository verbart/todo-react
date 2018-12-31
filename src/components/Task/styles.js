export default {
  taskContent: {
    display: 'flex',
    alignItems: 'center'
  },
  form: {
    flexGrow: 1,
    font: 'inherit !important',

    '& > textarea$textarea, & > textarea$textarea:focus': {
      width: '100%',
      minHeight: 0,
      padding: 0,
      font: 'inherit',
      border: 0,
      resize: 'none',
      background: 'none'
    }
  },
  textarea: {}
};
