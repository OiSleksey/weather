import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import CreateTaskInput from '../CreateTaskInput';
import { createSerializer } from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

configure({ adapter: new Adapter() });

describe('<CreateTaskInput.>', () => {
  it('should create task if input "text" and click on submit', () => {
    const mockHandleChange = jest.fn();
    const wrapperComponent = shallow(
      <CreateTaskInput sendInputData={mockHandleChange} />
    );
    const fakeEvent = {
      target: { value: 'Task number 1' },
    };
    wrapperComponent.find('.create-task__input').simulate('change', fakeEvent);
    wrapperComponent.find('.btn').simulate('click');
    expect(mockHandleChange).toBeCalledWith(fakeEvent.target);
  });

  it('should create task if input " " and click on submit', () => {
    const mockHandleChange = jest.fn();
    const wrapperComponent = shallow(
      <CreateTaskInput sendInputData={mockHandleChange} />
    );
    const fakeEvent = {
      target: { value: '' },
    };
    wrapperComponent.find('.create-task__input').simulate('change', fakeEvent);
    wrapperComponent.find('.btn').simulate('click');
    expect(mockHandleChange).toBeCalledWith({ value: '' });
  });

  it('should display this render', () => {
    const mockHandleChange = jest.fn();
    const wrapperComponent = shallow(
      <CreateTaskInput sendInputData={mockHandleChange} />
    );
    expect(wrapperComponent.find('.create-task')).toMatchSnapshot();
  });
});
