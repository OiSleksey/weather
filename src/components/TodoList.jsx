import React, { Component, useEffect } from 'react';
import ScreenExtension from './ScreenExtension';
import TaskList from './TaskList';
import CreateTaskInput from './CreateTaskInput';
import { connect } from 'react-redux';
import * as asyncAction from '../tasks/tasks.actions';
import {
  taskListSelector,
  sortingTasksSelector,
} from '../tasks/tasks.selector';
import { setOtherUrl } from '../scripts/dataBaseRequsts';
import PropTypes from 'prop-types';

const TodoList = props => {
  useEffect(() => {
    //Start assigning the first url in fetch Data Base
    setOtherUrl();
    //Start assigning the first date from Data Base
    props.getInfoTask();
  }, []);

  const taskList = sortingTasksSelector(props.tasks);
  return (
    <div className="todo-list">
      <ScreenExtension />
      <CreateTaskInput sendInputData={props.createNewTask} />
      <ul className="list">
        {taskList.map(task => (
          <TaskList
            key={task.id}
            {...task}
            setChecked={props.updateTask}
            deleteTask={props.deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  getInfoTask: PropTypes.func.isRequired,
  createNewTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
};

const mapState = state => {
  return {
    tasks: taskListSelector(state),
  };
};

const mapDispatch = {
  getInfoTask: asyncAction.getTodoTasks,
  createNewTask: asyncAction.createTodoTask,
  updateTask: asyncAction.updateTodoTask,
  deleteTask: asyncAction.deleteTodoTask,
};
export default connect(mapState, mapDispatch)(TodoList);
