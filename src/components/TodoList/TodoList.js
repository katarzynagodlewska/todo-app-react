import React, { useState } from 'react';
import Todo from './Todo';

function TodoList(props) {
    const [todoList, setTodoList] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        const {value} = event.target;
        setInputValue(value);
    }

    const handleButtonClick = () => {
        setTodoList([...todoList, inputValue]);
        setInputValue("");
    }
    return (
        <div>
            Moja aplikacja Todo 
            <input
                name="Todo Input"
                placeholder="Co będziemy dzisiaj rbić?"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button
                onClick={handleButtonClick}
            >
                Dodaj
            </button>
            {todoList.map((todo) => (            
            <Todo                 
            key={todo}
            todo={todo}
            />
            ))}   
        </div>
    )
}

export default TodoList;
