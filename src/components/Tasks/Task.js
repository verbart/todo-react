import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui'
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import RestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import { updateTask, removeTask } from "../../actions/index";

@connect(state => ({
  initialValues: {
    name: ''
  }
}), dispatch => ({
  updateTask: payload => dispatch(updateTask(payload)),
  removeTask: payload => dispatch(removeTask(payload))
}))

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
      <ListItem
        key={ task.id }
        button
        onClick={ () => this.props.updateTask({ ...task, done: !task.done }) }
      >
        <Checkbox
           checked={ !!task.done }
           onChange={ () => this.props.updateTask({ ...task, done: !task.done }) }
        />

        {this.state.isEdit
          ?
          <div>
            <Form name="editTask" onSubmit={ this.props.handleSubmit(this.handleUpdate) }>
              <Field name='name' component={ TextField }/>
            </Form>

            <ListItemSecondaryAction>
              <IconButton aria-label="Save">
                <SaveIcon />
              </IconButton>
              <IconButton aria-label="Cancel" onClick={ () => this.toggleEdit(task) }>
                <RestoreIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </div>
          :
          <div>
            <ListItemText primary={task.name} />

            <ListItemSecondaryAction>
              <IconButton aria-label="Edit" onClick={ () => this.toggleEdit(task) }>
                <EditIcon />
              </IconButton>
              <IconButton aria-label="Archive" onClick={ () => this.props.removeTask(task) }>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </div>
        }
      </ListItem>

      // <li key={ task.id }>
      //   {(() => {
      //     if (this.state.isEdit) return (
      //       <span>
      //         <Form name="editTask" onSubmit={ this.props.handleSubmit( this.handleUpdate ) }>
      //           <Field name='name' component="input"/>
      //           &nbsp;
      //           <button type="button" onClick={ () => this.toggleEdit(task) }>cancel</button>
      //           <button>save</button>
      //         </Form>
      //       </span>
      //     ); else return (
      //       <span>
      //         <Field
      //           id={ task.id }
      //           name="done"
      //           component="input"
      //           type="checkbox"
      //           checked={ !!task.done }
      //           onChange={ () => this.props.updateTask({ ...task, done: !task.done }) }
      //         />
      //         <label htmlFor={ task.id }>{ task.name }</label>
      //         &nbsp;
      //         <button onClick={ () => this.toggleEdit(task) }>edit</button>
      //         <button onClick={ () => this.props.removeTask(task) }>delete</button>
      //       </span>
      //     );
      //   })()}
      // </li>
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
