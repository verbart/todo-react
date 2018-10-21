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

export default (state = initialState, action) => {
  switch (action.type) {

    case types.ADD_TASK:
      return { ...state, taskList: [ ...state.taskList, action.payload ] };

    case types.REMOVE_TASK:
      return { ...state, taskList: state.taskList.filter(item => item.id !== action.payload.id) };

    case types.SET_EDITED_TASK:
      return { ...state, editedTask: action.payload };

    case types.UPDATE_TASK:
      return { ...state, taskList: state.taskList.map(item => item.id === action.payload.id ? action.payload : item) };

    default:
      return state;
  }
};
