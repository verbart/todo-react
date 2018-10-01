import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Form, Field, reduxForm } from 'redux-form';
import { updateTask, removeTask } from '../actions';

@connect(
  state => ({
    initialValues: {
      name: ''
    }
  }),
  dispatch => bindActionCreators({ updateTask, removeTask }, dispatch)
)

@reduxForm({
  form: 'editTask'
})

class Task extends Component {
  state = {
    isEdit: false
  };

  render() {
    const { task } = this.props;

    return (
      <li key={ task.id }>
        {(() => {
          if (this.state.isEdit) return (
            <span>
              <Form name="editTask" onSubmit={ this.props.handleSubmit( this.handleUpdate ) }>
                <Field name='name' component="input"/>
                &nbsp;
                <button type="button" onClick={ () => this.toggleEdit(task) }>cancel</button>
                <button>save</button>
              </Form>
            </span>
          ); else return (
            <span>
              <Field
                id={ task.id }
                name="done"
                component="input"
                type="checkbox"
                checked={ !!task.done }
                onChange={ () => this.props.updateTask({ ...task, done: !task.done }) }
              />
              <label htmlFor={ task.id }>{ task.name }</label>
              &nbsp;
              <button onClick={ () => this.toggleEdit(task) }>edit</button>
              <button onClick={ () => this.props.removeTask(task) }>delete</button>
            </span>
          );
        })()}
      </li>
    );
  }

  toggleEdit = (task = {}) => {
    this.props.change('name', task.name);
    this.setState({
      isEdit: !this.state.isEdit
    });
  };

  handleUpdate = (data) => {
    this.props.updateTask({ ...this.props.task, ...data });
    this.toggleEdit();
  };
}

export default Task;
