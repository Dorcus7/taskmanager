import React from 'react';
import TaskForm from "./assets/components/TaskForm";
import TaskColumn from './assets/components/TaskColumn';
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import './App.css'; 

const App = () => {
  return (
    <div className="app">
      <TaskForm />
      <main className="task-container">
        <div className="task-container">
          <TaskColumn image={img1} title="Todo" />
          <TaskColumn image={img2} title="In Progress" />
          <TaskColumn image={img3} title="Done" />
        </div>
      </main>
    </div>
  );
};

export default App;