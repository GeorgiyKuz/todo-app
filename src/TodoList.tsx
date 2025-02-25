import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Checkbox,
  ListItemButton,
} from "@mui/material";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  tasks: Task[];
  toggleTask: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, toggleTask }) => {
  return (
    <List>
      {tasks.map((task) => (
        <ListItem
          key={task.id}
          disablePadding // Убираем внутренние отступы для ListItemButton
        >
          <ListItemButton
            onClick={() => toggleTask(task.id)}
            sx={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            <Checkbox checked={task.completed} />
            <ListItemText primary={task.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
