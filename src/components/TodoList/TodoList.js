import React, { useState } from 'react';
import Todo from './Todo';

function TodoList(props) {
    const [todoList, setTodoList] = useState([])
    return (
        <div>
            Moja aplikacja Todo         
            <Todo/>
        </div>
    )
}

export default TodoList;
