import React, { useRef, useState } from 'react';
import { MdCancel } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { RiSaveFill } from 'react-icons/ri';

function Todo(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');

  const editFieldRef = useRef(null);
  const editButtonRef = useRef(null);

  function handleChange(e) {
    setNewName(e.target.value);
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }

  const editingTemplate = (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between p-2 border-b">
        <div className="c-cb grid ">
          <label htmlFor={props.id} className="todo-label mb-1">New name for {props.name}</label>
          <input 
            type="text"
            id={props.id}
            value={newName}
            className="h-6 leading-5 px-1" 
            defaultChecked={props.completed} 
            onChange={handleChange}
            ref={editFieldRef}
          />
                 
        </div>
          <div className="btn-group">
            <button type="button" 
              className="btn 
              text-blue-500 p-1"
              onClick={() => setEditing(false)}
              
              >
              <MdCancel />
            </button>
            <button type="button" 
            className="btn p-1 text-red-500"
            onChange={handleChange}>
              <RiSaveFill />
            </button>
          </div>
        </div>
    </form>
  );
  
  const viewTemplate = (
    
      <li className="flex p-2 justify-between border-b">
        <div className="c-cb leading-5">
          <input type="checkbox"
            id={props.id}
            className="form-checkbox h-4 w4 text-indigo-600" 
            defaultChecked={props.completed} 
            onChange={() => props.toggleTaskCompleted(props.id)}
            />
          <label htmlFor={props.id} className="todo-label ml-4">{props.name}</label>
        </div>
        <div className="btn-group">
          <button type="button" 
            className="btn 
            text-blue-500 p-1"
            onClick={() => setEditing(true)}
            ref={editButtonRef}
            >
            <FaRegEdit />
          </button>
          <button type="button" className="btn p-1 text-red-500" onClick={() => props.deleteTask(props.id)}>
            <RiDeleteBin5Fill />
          </button>
        </div>
      </li>  
  );
     return <div className="todo">{isEditing ? editingTemplate : viewTemplate}</div>;
}

export default Todo;
