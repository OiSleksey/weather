export const taskListSelector = state => {
  return state.tasks.tasksList;
};

export const sortingTasksSelector = state => {
  const taskList = state.length === 0 ? [] : state;
  const sortingTasks = taskList.slice().sort((a, b) => a.done - b.done);
  return sortingTasks;
};
