import * as dataFetch from '../scripts/dataBaseRequsts';
import { taskListSelector } from './tasks.selector';
export const TODO_LIST_GET = 'TODO_LIST_GET';

export const displayTodoList = list => {
  const checkOnError = list.length === 0 ? [] : list;
  const taskList = checkOnError.map(({ _id, ...task }) => ({
    id: _id,
    ...task,
  }));
  return {
    type: TODO_LIST_GET,
    payload: {
      taskList,
    },
  };
};

export const getTodoTasks = () => {
  return function (dispatch) {
    dataFetch.getRequest().then(data => {
      dispatch(displayTodoList(data));
    });
  };
};

export const createTodoTask = inputData => {
  return function (dispatch) {
    if (inputData.value.trim() === '') {
      return;
    }
    const newTask = {
      text: inputData.value.trim(),
      done: false,
    };
    dataFetch.postRequest(newTask).then(() => dispatch(getTodoTasks()));
  };
};

export const updateTodoTask = id => {
  return function (dispatch, getState) {
    const state = getState();
    const taskList = taskListSelector(state);
    const { done, text } = taskList.find(task => task.id === id);
    const updateTask = {
      done: !done,
      text,
    };
    dataFetch.putRequest(updateTask, id).then(() => dispatch(getTodoTasks()));
  };
};

export const deleteTodoTask = id => {
  return function (dispatch) {
    dataFetch.deleteRequest(id).then(() => dispatch(getTodoTasks()));
  };
};
