import React, { useState } from "react";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import TodoList from "./TodoList";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const TodoApp: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const remainingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <Box sx={{ maxWidth: 400, margin: "auto", padding: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        ToDo App
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Добавить новую задачу"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && addTask()}
      />
      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={addTask}
        sx={{ marginTop: 2 }}
      >
        Добавить
      </Button>
      <TodoList tasks={tasks} toggleTask={toggleTask} />
      <Box sx={{ marginTop: 2 }}>
        <Typography>Осталось задач: {remainingTasks}</Typography>
        <Button
          variant="outlined"
          color="secondary"
          onClick={clearCompleted}
          disabled={tasks.length === remainingTasks}
        >
          Очистить выполненные
        </Button>
      </Box>
    </Box>
  );
};

export default TodoApp;
