import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const TaskList = ({ text, done, id, setChecked, deleteTask }) => {
  const statusCheckbox = classNames('list-item', { 'list-item_done': done });
  return (
    <li className={statusCheckbox}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        checked={done}
        onChange={() => setChecked(id)}
      />
      <span className="list-item__text">{text} </span>
      <button
        className="list-item__delete-btn"
        onClick={() => deleteTask(id)}
      />
    </li>
  );
};

export default TaskList;

TaskList.propTypes = {
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  setChecked: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

// TaskList.defaultProps={
//   text,
//   done,
//   id,
//   setChecked,
//   deleteTask
// }
