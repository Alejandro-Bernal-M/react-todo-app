import React from 'react';
import Header from './Header';
import TodosLogic from './TodosLogic';
import Navbar from './Navbar';

const TodoApp = () => (
  <div className="wrapper">
    <div className="todos">
      <Navbar />
      <Header />
      <TodosLogic />
    </div>
  </div>
);
export default TodoApp;
