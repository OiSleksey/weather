// import * as dataFetch from '../scripts/dataBaseRequsts';
// import { taskListSelector } from './tasks.selector';
import { getLocation, getPosition } from '../../api-requests/get.location';

export const WEATHER_LOCATION = 'WEATHER_LOCATION';

export const weatherLocation = coords => {
  return {
    type: WEATHER_LOCATION,
    payload: {
      coords,
    },
  };
};

export const WEATHER_POSITION_NAME = 'WEATHER_POSITION_NAME';

export const weatherPositionName = namePosition => {
  return {
    type: WEATHER_POSITION_NAME,
    payload: {
      namePosition,
    },
  };
};
// export const displayTodoList = list => {
//   const checkOnError = list.length === 0 ? [] : list;
//   const taskList = checkOnError.map(({ _id, ...task }) => ({
//     id: _id,
//     ...task,
//   }));
//   return {
//     type: TODO_LIST_GET,
//     payload: {
//       taskList,
//     },
//   };
// };

export const getLocationBrowser = coords => {
  return function (dispatch) {
    getLocation().then(data => {
      dispatch(weatherLocation(data));
      dispatch(getPositionName(data.lat, data.lon));
    });
  };
};

export const getPositionName = (lat, lon) => {
  console.log('getPositionName ' + lat, lon);
  return function (dispatch, getState) {
    const newState = getState;
    console.log(newState);
    getPosition(lat, lon).then(data => {
      console.log(data);
      dispatch(weatherPositionName(data));
    });
  };
};

// export const getTodoTasks = () => {
//   return function (dispatch) {
//     dataFetch.getRequest().then(data => {
//       dispatch(displayTodoList(data));
//     });
//   };
// };

// export const createTodoTask = inputData => {
//   return function (dispatch) {
//     if (inputData.value.trim() === '') {
//       return;
//     }
//     const newTask = {
//       text: inputData.value.trim(),
//       done: false,
//     };
//     dataFetch.postRequest(newTask).then(() => dispatch(getTodoTasks()));
//   };
// };

// export const updateTodoTask = id => {
//   return function (dispatch, getState) {
//     const state = getState();
//     const taskList = taskListSelector(state);
//     const { done, text } = taskList.find(task => task.id === id);
//     const updateTask = {
//       done: !done,
//       text,
//     };
//     dataFetch.putRequest(updateTask, id).then(() => dispatch(getTodoTasks()));
//   };
// };

// export const deleteTodoTask = id => {
//   return function (dispatch) {
//     dataFetch.deleteRequest(id).then(() => dispatch(getTodoTasks()));
//   };
// };
