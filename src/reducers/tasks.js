import * as types from '../constants';

const initialState = [
  {
    id: 1,
    name: 'Learn JS',
    done: true
  },
  {
    id: 2,
    name: 'Learn React'
  }
];

export default (state = initialState, action) => {
  switch (action.type) {

    case types.ADD_TASK:
      return [ ...state, action.payload ];

    case types.REMOVE_TASK:
      return state.filter(item => item.id !== action.payload.id);

    case types.UPDATE_TASK:
      return state.map(item => item.id === action.payload.id ? action.payload : item);

    default:
      return state;
  }
};
