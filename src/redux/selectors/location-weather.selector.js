export const locationSelector = state => {
  if (!state.location) return null;
  return state.location;
};

export const namePositionSelector = state => {
  if (
    !state.location ||
    !state.location.namePosition ||
    !state.location.namePosition.address
  )
    return null;
  const positionResponse = state.location.namePosition.address;
  let namePosition;
  if (positionResponse.town) namePosition = positionResponse.town;
  if (positionResponse.city) namePosition = positionResponse.city;
  if (positionResponse.village) namePosition = positionResponse.village;
  return namePosition;
};

// export const taskListSelector = state => {
//   return state.tasks.tasksList;
// };

// export const sortingTasksSelector = state => {
//   const taskList = state.length === 0 ? [] : state;
//   const sortingTasks = taskList.slice().sort((a, b) => a.done - b.done);
//   return sortingTasks;
// };
