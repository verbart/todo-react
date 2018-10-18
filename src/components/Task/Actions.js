import React, { Fragment } from 'react';
import { Button } from 'semantic-ui-react'

export default ({ isEdit, task, cancelEdit, startEdit, removeTask }) => (
  <Fragment>
    {isEdit ?
      <Fragment>
        <Button onClick={console.log('wtf?')} icon="save" form={task.id} />
        <Button icon="undo" onClick={() => cancelEdit()} />
      </Fragment>
      :
      <Fragment>
        <Button icon="edit" onClick={() => startEdit(task)} />
        <Button icon="trash" onClick={() => removeTask(task)} />
      </Fragment>
    }
  </Fragment>
);
