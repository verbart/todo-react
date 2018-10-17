import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, List, Button, Icon } from 'semantic-ui-react'
import { Form, Field, reduxForm } from 'redux-form';
import { updateTask, removeTask } from "../actions";

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
    const Checkbox = () => task.done ?
      <Icon name="circle outline check" color="teal" /> :
      <Icon name="circle outline" />;

    return (
      <List.Item onClick={() => this.props.updateTask({ ...task, done: !task.done })}>
        <Grid>
          <Grid.Row className="equal width" verticalAlign="middle">
            <Grid.Column>
              <List.Content>
                <Checkbox/>
                {task.name}
              </List.Content>
            </Grid.Column>

            <Grid.Column className="right aligned">
              <List.Content>
                <Button.Group basic size='small' onClick={(e) => e.stopPropagation()}>
                  <Button icon="edit" />
                  <Button icon="trash" onClick={() => this.props.removeTask(task)} />
                </Button.Group>
              </List.Content>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </List.Item>
    );

    // return (
    //   <li key={ task.id }>
    //     {(() => {
    //       if (this.state.isEdit) return (
    //         <span>
    //           <Form name="editTask" onSubmit={ this.props.handleSubmit( this.handleUpdate ) }>
    //             <Field name='name' component="input"/>
    //             &nbsp;
    //             <button type="button" onClick={ () => this.toggleEdit(task) }>cancel</button>
    //             <button>save</button>
    //           </Form>
    //         </span>
    //       ); else return (
    //         <span>
    //           <Field
    //             id={ task.id }
    //             name="done"
    //             component="input"
    //             type="checkbox"
    //             checked={ !!task.done }
    //             onChange={ () => this.props.updateTask({ ...task, done: !task.done }) }
    //           />
    //           <label htmlFor={ task.id }>{ task.name }</label>
    //           &nbsp;
    //           <button onClick={ () => this.toggleEdit(task) }>edit</button>
    //           <button onClick={ () => this.props.removeTask(task) }>delete</button>
    //         </span>
    //       );
    //     })()}
    //   </li>
    // );
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
