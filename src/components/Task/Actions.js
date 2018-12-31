import React, { Fragment } from 'react';
import { Button } from 'semantic-ui-react'

export default ({ isEdit, task, startEdit, cancelEdit, updateTask, removeTask }) => {
  return (
    <Button.Group basic size='small' onClick={(e) => e.stopPropagation()}>
      {isEdit ?
        <Fragment>
          <Button icon='save' type='submit' onClick={() => updateTask()} />
          <Button icon='undo' onClick={() => cancelEdit()} />
        </Fragment>
        :
        <Fragment>
          <Button icon='edit' onClick={() => startEdit(task)} />
          <Button icon='trash' onClick={() => removeTask(task)} />
        </Fragment>
      }
    </Button.Group>
  );
}
