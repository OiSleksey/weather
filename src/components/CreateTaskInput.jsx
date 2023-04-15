import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateTaskInput extends Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  };

  handleClick = () => {
    this.props.sendInputData(this.state);
    this.setState({
      value: '',
    });
  };

  render() {
    return (
      <div className="create-task">
        <input
          type="text"
          className="create-task__input"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button className="btn" onClick={this.handleClick}>
          Create
        </button>
      </div>
    );
  }
}

export default CreateTaskInput;

CreateTaskInput.propTypes = {
  sendInputData: PropTypes.func.isRequired,
};
