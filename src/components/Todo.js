import React from "react";
import { Checkbox, IconButton, ListItem, Typography } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function Todo({todo, toggleComplete, removeTodo}) {
    function handleCheckboxClick() {
        toggleComplete(todo.id);
    }

    function handleRemoveClick() {
        removeTodo(todo.id)
    }

    return (
        <ListItem style={{  display: "flex" }}>
            <Checkbox 
                checked={todo.completed}
                onClick={handleCheckboxClick}
            />
            <Typography 
                variant="body1"
                style={{ 
                    textDecoration: todo.completed ? "line-through" : null
                 }}
            >{todo.task}</Typography>
            <IconButton onClick={handleRemoveClick} >
                <HighlightOffIcon />
            </IconButton>
        </ListItem>
    )
}

export default Todo;