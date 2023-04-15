// import logo from './logo.svg';
import React from 'react';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import store from '../redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="app" style={{ display: 'none' }}>
        <h1 className="title">Todo List</h1>
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
