import React from "react";
import Todo from "./Todo";
import { List } from "@mui/material";

function TodoList({ todos, toggleComplete, removeTodo }) {
    return (
        <List>
            {todos.map(todo => (
                <Todo 
                    key={todo.id} 
                    todo={todo} 
                    toggleComplete={toggleComplete}
                    removeTodo={removeTodo}
                    />
            ))}
        </List>
    )
}

<<<<<<< HEAD
export default TodoList;
=======
export default TodoList;
>>>>>>> 02551e8a0c158bde21881d577c79bd708992fced
