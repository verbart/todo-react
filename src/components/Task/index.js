import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextArea } from 'react-semantic-redux-form';
import { Grid, List, Button } from 'semantic-ui-react'
import { Form, Field, reduxForm } from 'redux-form';
import injectSheet from 'react-jss'
import { updateTask, removeTask } from '../../actions/index';
import Checkbox from './Checkbox';
import styles from './styles';

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

@injectSheet(styles)

export default class Task extends Component {
  state = {
    isEdit: false
  };

  render() {
    const { isEdit } = this.state;
    const { classes, task } = this.props;

    return (
      <List.Item onClick={() => this.props.updateTask({ ...task, done: !task.done })}>
        <Grid>
          <Grid.Row className="equal width" verticalAlign="middle">
            <Grid.Column>
              <List.Content className={classes.listContent}>
                <Checkbox done={task.done ? 1 : 0} />

                <Form
                  name="editTask"
                  className={classes.form}
                  onSubmit={this.props.handleSubmit( this.handleUpdate )}
                >
                  {isEdit ?
                    <Field
                      component={TextArea}
                      name="name"
                      autoHeight
                      rows={1}
                      placeholder='Enter task name...'
                      onClick={(e) => e.stopPropagation()}
                    />
                    :
                    task.name
                  }
                </Form>
              </List.Content>
            </Grid.Column>

            <Grid.Column className="right aligned" style={{ flexGrow: 0, width: 'auto' }}>
              <List.Content>
                <Button.Group basic size='small' onClick={(e) => e.stopPropagation()}>
                  <Button icon="edit" onClick={() => this.toggleEdit(task)} />
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

  handleUpdate = (task) => {
    this.props.updateTask({ ...this.props.task, ...task });
    this.toggleEdit();
  };
}
