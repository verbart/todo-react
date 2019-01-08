import React from 'react';
import { Button } from 'semantic-ui-react'

export default ({ isEdit, task, startEdit, cancelEdit, updateTask, removeTask }) => {
  return (
    <Button.Group basic size='small' onClick={(e) => e.stopPropagation()}>
      {isEdit ?
        <>
          <Button icon='save' type='submit' onClick={() => updateTask()} />
          <Button icon='undo' onClick={() => cancelEdit()} />
        </>
        :
        <>
          <Button icon='edit' onClick={() => startEdit(task)} />
          <Button icon='trash' onClick={() => removeTask(task)} />
        </>
      }
    </Button.Group>
  );
}
