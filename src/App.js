import React, { useState } from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { nanoid } from "nanoid";
import ClearButton from "./components/ClearButton";

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('All');

  

  function addTask(name) {
    const newTask = {id: "todo-" + nanoid(), name: name, completed: false};
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return {...task, completed: !task.completed};
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        return {...task, name: newName};
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  // function clearCompletedTask(completed) {
  //   const remainingTasks = tasks.filter(FILTER_MAP[filter]).map(task => completed !== task.completed);
  //   setTasks(remainingTasks);
  // }

  const taskList = tasks.filter(FILTER_MAP[filter]).map(task => (
    <Todo 
      id={task.id} 
      name={task.name} 
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
      />
  ));

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton key={name} 
      name={name} 
      isPressed={name === filter} 
      setFilter={setFilter}
      deleteTask={deleteTask} />
  ));

 

  const tasksNoun = taskList.length !== 1 ? 'items' : 'item';
  const headingText = `${taskList.length} ${tasksNoun} left`;

  return (
    <div className="todo-app mt-16 md:mt-12 lg:mt-16 mx-4 md:mx-8">

      <Form addTask={addTask} />
      
      <div className="bg-light-v-l-gray dark:bg-v-d-blue rounded shadow-md">
        <ul
        className="todo-list md:p-2 text-light-v-d-grayish-blue text-sm md:text-base"
          aria-labelledby="list-heading"
        >
          {taskList}
          
        </ul>
        <div className="description p-2 flex justify-between text-xs md:text-sm text-light-v-d-grayish-blue">
          <p className="headingText">{headingText}</p>
          <div className="filters btn-group">
            {filterList}
            
          </div>
          <div>
            <ClearButton />
          </div>

        </div>
        
      </div>  
    </div>
  );
}

export default App;
