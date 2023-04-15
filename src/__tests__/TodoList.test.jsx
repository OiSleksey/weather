import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
  setOtherUrl,
} from '../dataBaseRequsts';
import TodoList from '../TodoList';
import { createSerializer } from 'enzyme-to-json';
import CreateTaskInput from '../CreateTaskInput';
// import axios from 'axios';

//Configure snapshot (enzyme-to-json)
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

//Configure (@cfaester/enzyme-adapter-react-18)
configure({ adapter: new Adapter() });

// jest.mock('../CreateTaskInput', () => {
//   CreateTaskInput = jest.fn();
// });

// jest.mock('../TaskList', () => {
//   TaskList = jest.fn();
// });

// const testRequest = () => {
//   getRequest().then(res => console.log(res));
//   console.log('Jest TEST');
// };

// testRequest();

describe('<TodoList />', () => {
  jest.mock('../dataBaseRequsts', () => {
    const tasks = [
      {
        text: 'Task 1',
        done: true,
        id: '27 123vb',
      },
    ];
    return {
      getRequest: jest.fn(() => Promise.resolve()),
      postRequest: jest.fn(() => Promise.resolve()),
      putRequest: jest.fn(() => Promise.resolve()),
      deleteRequest: jest.fn(() => Promise.resolve()),
      setOtherUrl: jest.fn(() => Promise.resolve()),
    };
  });
  it('should test TaskList', () => {
    const wrapperComponent = shallow(<TodoList />);

    expect(wrapperComponent.find('.todo-list')).toMatchSnapshot();
  });

  //   it('should test TaskList 2 ', () => {
  //     const wrapperComponent = shallow(<TodoList />);

  //     expect(wrapperComponent.find('CreateTaskInput')).toMatchSnapshot();
  //   });
});

// // app.js
// export async function fetchData() {
//     const response = await fetch('https://example.com/data');
//   const data = await response.json();
//   return data;
//   }
//   // app.test.js
//   import { fetchData } from './app';

//   test('fetchData returns the expected data', async () => {
//   // Create a mock implementation of the fetch function that returns a resolved Promise
//   global.fetch = jest.fn(() => Promise.resolve({json: () => Promise.resolve({ name: 'John Doe', age: 30 })}))
//   // Call the fetchData function and verify the returned data
//   const data = await fetchData();

//   expect(data).toEqual({ name: 'John Doe', age: 30 });
//   // Verify that the fetch function was called with the correct URL
//   expect(global.fetch).toHaveBeenCalledWith('https://example.com/data');
// })
