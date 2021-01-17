import React, { useState } from 'react';
import { FaRegMoon } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';


function Form(props) {
    const [name, setName] = useState('');

    function handleChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName("");
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="flex justify-between mb-4 text-white">
                <h1 className="font-bold text-2xl md:text-4xl">TODO</h1>
                <button className="toggle text-base md:text-2xl"><FaRegMoon /></button>
            </div>
            <div className="flex mb-4">
                <input type="text" id="todo-input" name="text" value={name} onChange={handleChange}
                        className="input w-full p-2 bg-light-v-l-gray dark:bg-dark-v-d-blue 
                        text-light-v-d-grayish-blue text-sm md:text-base rounded-l" autoComplete="off" required/>
                <button type="submit" className="bg-white p-2 rounded-r"><IoMdAdd /></button>
            </div>
      </form>
    );
}

export default Form;
