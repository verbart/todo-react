import React, { Component } from 'react';

class CreationForm extends Component {
  state = {
    taskName: ''
  };

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input autoFocus value={ this.state.taskName } onChange={ this.onChange }/>
        <button>Save</button>
      </form>
    );
  }

  onChange = (event) => {
    this.setState({ taskName: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      taskName: ''
    });

    this.props.onSubmit(this.state.taskName);
  };
}

export default CreationForm;
