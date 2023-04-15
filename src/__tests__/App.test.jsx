import React from 'react';
import App from '../App';
import { shallow, configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

configure({ adapter: new Adapter() });

describe('<App.>', () => {
  it('should display TodoList', () => {
    const wrapperComponent = shallow(<App />);
    expect(wrapperComponent.find('TodoList').exists()).toBeTruthy();
  });
});
