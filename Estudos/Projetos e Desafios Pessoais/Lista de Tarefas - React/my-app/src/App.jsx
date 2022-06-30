import React, { useState } from 'react';
import "./App.css";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Header from "./components/Header";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id:"1",
      title: "Começar a Digitar Tarefas",
      completed: false,
    },
  ]);
  
  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ... task, completed: !task.completed }

      return task;
    });

    setTasks(newTasks);
  };


  const handleTaskAddition = (taskTitle) => {
    const newTask = [
      ... tasks, 
      {
        title: taskTitle,
        id: Math.random(10),
        completed: false,
      },
    ];

    setTasks(newTask);
  }


  const handleTaskDeletion = (taskId) => {
    const newTask = tasks.filter(task => task.id !== taskId)

    setTasks(newTask);
  }



  return (
    <div className='container'>
      <Header />
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks 
          tasks={tasks}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion} />
    </div>
  );
};

export default App;