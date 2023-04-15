import { TODO_LIST_GET } from './tasks.actions';

const initialState = {
  tasksList: [],
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_LIST_GET: {
      return {
        ...state,
        tasksList: action.payload.taskList,
      };
    }
    default:
      return state;
  }
};
