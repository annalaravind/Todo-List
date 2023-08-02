import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TodoList from './functioncomp/REACT Projects/TodoList';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<TodoList />} />
      </Routes>
    </div>
  )
}

export default App;
