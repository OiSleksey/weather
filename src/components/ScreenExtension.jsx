import React, { useState } from 'react';

class ScreenExtension extends React.Component {
  state = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize).bind(this);
  }

  handleResize() {
    // код для обработки изменения размера окна
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ display: 'inline-block', marginRight: '30px' }}>
          {this.state.width}px width
        </h3>
        <h3 style={{ display: 'inline-block' }}>
          {this.state.height}px height
        </h3>
      </div>
    );
  }
}

export default ScreenExtension;
