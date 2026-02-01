import React, { useState } from 'react'

const App = () => {

    const [task, setTask] = useState('');

    const handleChange = (e) => {
        setTask(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(task.length < 6){
            alert('Task should be at least 6 characters long');
            return;
        }


    }
    return (
        <div>
            <h1>Task Management App with React Memo</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter a task...' value={task} onChange={handleChange} />

                <button type='submit'>New todo</button>
            </form>
        </div>
    )
}

export default App

