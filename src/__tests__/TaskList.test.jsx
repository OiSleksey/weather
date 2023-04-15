import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import TaskList from '../TaskList';
import { createSerializer } from 'enzyme-to-json';

//Configure snapshot (enzyme-to-json)
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

//Configure (@cfaester/enzyme-adapter-react-18)
configure({ adapter: new Adapter() });

describe('<TaskList />', () => {
  const props = {
    text: 'Task 1',
    done: true,
    id: 'id-test-1',
    setChecked: jest.fn(),
    deleteTask: jest.fn(),
  };
  const wrapperComponent = shallow(<TaskList {...props} />);

  it('should <li> have class="list-item_done"', () => {
    expect(
      wrapperComponent.find('.list-item').hasClass('list-item_done')
    ).toBeTruthy();
  });

  it('should <li> don`t have class="list-item_done"', () => {
    const props = {
      text: 'Task 1',
      done: false,
      id: 'id-test-1',
      setChecked: jest.fn(),
      deleteTask: jest.fn(),
    };
    const wrapperComponent = shallow(<TaskList {...props} />);
    expect(
      wrapperComponent.find('.list-item').hasClass('list-item_done')
    ).toBeFalsy();
  });

  it('should click input type="checkbox" and call setCheked ', () => {
    wrapperComponent.find('.list-item__checkbox').simulate('change', true);
    expect(props.setChecked).toBeCalledWith(props.id);
  });

  it('should click <button> and call deleteTask ', () => {
    wrapperComponent.find('.list-item__delete-btn').simulate('click');
    expect(props.deleteTask).toBeCalledWith(props.id);
  });
});
