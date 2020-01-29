import React, { useState } from 'react';
import Todo from './Todo';

function TodoList(props) {
    const [todoList, setTodoList] = useState(["Moje zadanie","moje zadanie2", "Moje zadanie3"])
    return (
        <div>
            Moja aplikacja Todo  
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
