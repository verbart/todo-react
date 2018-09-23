import React, { Component } from 'react';

class TaskL extends Component {
  state = {
    isEdit: false,
    tempTask: null
  };

  render() {
    const { task } = this.props;

    return (
      <li key={ task.id }>
        <input
          id={ task.id }
          type="checkbox"
          checked={ !!task.done }
          onChange={ () => this.props.onTaskCompletionToggle(task) }
        />

        {(() => {
          if (this.state.isEdit) return (
            <span>
              <input value={ this.state.tempTask.name } onChange={ this.handleChangeName }/>
              &nbsp;
              <button onClick={ () => this.toggleEdit(task) }>cancel</button>
              <button onClick={ () => this.handleUpdate(task) }>save</button>
            </span>
          ); else return (
            <span>
              <label htmlFor={ task.id }>{ task.name }</label>
              &nbsp;
              <button onClick={ () => this.toggleEdit(task) }>edit</button>
              <button onClick={ () => this.props.onTaskDelete(task) }>delete</button>
            </span>
          );
        })()}
      </li>
    );
  }

  toggleEdit = (task) => {
    this.setState({ isEdit: !this.state.isEdit });
    task && this.setState({ tempTask: task });
  };

  handleChangeName = (e) => {
    this.setState({
      tempTask: { ...this.state.tempTask, name: e.target.value }
    });
  };

  handleUpdate = () => {
    this.props.onTaskUpdate(this.state.tempTask);
    this.toggleEdit();
  };
}

export default TaskL;
