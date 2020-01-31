import React, { useState } from 'react';
import Todo from './Todo';

function TodoList(props) {
    //const [todoList, setTodoList] = useState([]);
    //const [inputValue, setInputValue] = useState("");
    const [todoListState, setTodoListState] = useState({ todos:[], inputValue: "", error: "" })

    const handleInputChange = (event) => {
        const {value} = event.target;
        //setInputValue(value);
        setTodoListState({
            ...todoListState,
            inputValue: value
        })
    }

    const handleButtonClick = () => {
        const {todos} = todoListState
        if (todos.some(todo => todo === inputValue)) {
            setTodoListState({
                ...todoListState,
                error: "To zadanie już istnieje",
                inputValue: "",
            })
            return
        }
        setTodoListState({
            error:"",
            todos: [...todos, inputValue],
            inputValue: ""
        })
    }

    const {error, todos, inputValue} = todoListState;
    return (
        <div className="TodoList">
            Moja aplikacja Todo 
            <input className="Input"
                name="Todo Input"
                placeholder="Co będziemy dzisiaj robić?"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button className="Button"
                onClick={handleButtonClick}
            >
                Dodaj
            </button>
            <p>
                {error}
            </p>
            {todos.map((todo) => (            
            <Todo                 
            key={todo}
            todo={todo}
            />
            ))}   
        </div>
    )
}

export default TodoList;
