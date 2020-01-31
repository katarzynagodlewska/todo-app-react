import React from 'react';

function Todo(props) {
    const {todo} = props
    return (
        <div className="Todo">
            {todo}
        </div>
    )
}

export default Todo;
