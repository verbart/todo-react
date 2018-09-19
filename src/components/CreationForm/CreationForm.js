import React, { Component } from 'react';

class CreationForm extends Component {
  state = {
    taskName: ''
  };

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input
          required
          autoFocus
          placeholder="Enter task name..."
          value={ this.state.taskName }
          onChange={ this.onChange }
        />
        <button>Save</button>
      </form>
    );
  }

  onChange = (event) => {
    this.setState({ taskName: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit({
      id: Date.now(),
      name: this.state.taskName
    });

    this.setState({
      taskName: ''
    });
  };
}

export default CreationForm;
