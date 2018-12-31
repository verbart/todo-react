import * as types from '../constants';

export const addTask = payload => ({ type: types.ADD_TASK, payload });

export const removeTask = task => dispatch => {
  dispatch(updateLocalTask({ id: task.id, isLoading: true }));

  setTimeout(() => {
    dispatch({ type: types.REMOVE_TASK, payload: task });
  }, 1000);
};

export const updateLocalTask = payload => ({ type: types.UPDATE_TASK, payload });

export const updateTask = (task, onSuccess, onError) => dispatch => {
  dispatch(updateLocalTask({ id: task.id, isLoading: true }));

  setTimeout(() => {
    onSuccess && onSuccess();
    // onError && onError();

    dispatch(updateLocalTask({ ...task, isEdit: false, isLoading: false }));
  }, 1000);
};
