import * as types from '../constants';

const initialState = {
  editedTask: {},
  taskList: [
    {
      id: 1,
      name: 'Learn JS',
      done: true
    },
    {
      id: 2,
      name: 'Learn React and Redux'
    },
    {
      id: 3,
      name: 'Learn NodeJS'
    }
  ]
};

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case types.ADD_TASK:
      return { ...state, taskList: [ ...state.taskList, payload ] };

    case types.REMOVE_TASK:
      return { ...state, taskList: state.taskList.filter(item => item.id !== payload.id) };

    case types.UPDATE_TASK:
      return {
        ...state,
        taskList: state.taskList.map((item) => {
          return item.id === payload.id ? { ...item, ...payload } : item
        })
      };

    default:
      return state;
  }
};
