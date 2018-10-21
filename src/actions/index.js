import * as types from '../constants';

export const addTask = payload => ({ type: types.ADD_TASK, payload });
export const updateTask = payload => ({ type: types.UPDATE_TASK, payload });
export const setEditedTask = payload => ({ type: types.SET_EDITED_TASK, payload });
export const removeTask = payload => ({ type: types.REMOVE_TASK, payload });
