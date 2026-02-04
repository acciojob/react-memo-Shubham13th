
import React, { useMemo, useState } from 'react'

const App = () => {

    const [task, setTask] = useState('');

    const [todos, setTodos] = useState([]);

    const [count, setCount] = useState(0);

    const calculation = useMemo(() => expensiveCalculation(count), [count]);

    const [skill, setSkill] = useState(["HTML", "CSS", "JavaScript", "React"]);

    const handleChange = (e) => {
        setTask(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (task.length < 6) {
            alert('Task should be at least 6 characters long');
            return;
        }

        setSkill((prev) => [...prev, task]);
        setTask('');
    }

    const handleTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
    }

    const increment = () => {
        setCount((c) => c + 1);
    }

    return (
        <div>
            <h1>React.useMemo</h1>
            <h2>My Todos</h2>

            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
            <button onClick={handleTodo}>Add Todo</button>

            <div>
                Count: {count}
                <button onClick={increment}>+</button>

                <h2>Expensive Calculation</h2>

                {calculation}
            </div>

            <h2>React.memo</h2>

            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter a skill...' value={task} onChange={handleChange} />

                <button type='submit'>Add Skill</button>
            </form>
            <ul>
                {skill.map((sk, index) => (
                    <li key={index}>{sk}</li>
                ))}
            </ul>

        </div>
    )
}

export default React.memo(App);

const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};

