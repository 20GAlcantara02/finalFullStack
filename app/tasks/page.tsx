// app/tasks/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Complete Next.js project", completed: false },
    { id: 2, title: "Review PRs", completed: true },
  ]);

  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (!newTask.trim()) return;

    setTasks(prev => [
      ...prev,
      {
        id: Date.now(),
        title: newTask.trim(),
        completed: false,
      },
    ]);
    setNewTask("");
  };

  const toggleComplete = (id: number) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Your Tasks</h1>

      <div className="flex items-center space-x-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="flex-grow px-3 py-2 border rounded"
        />
        <Button onClick={handleAddTask}>Add</Button>
      </div>

      <ul className="space-y-3">
        {tasks.map(task => (
          <li
            key={task.id}
            className={`flex items-center justify-between p-3 rounded shadow ${
              task.completed ? "bg-green-100" : "bg-white"
            }`}
          >
            <span
              className={`cursor-pointer ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
              onClick={() => toggleComplete(task.id)}
            >
              {task.title}
            </span>
            <Button
              variant="outline"
              onClick={() =>
                setTasks(prev => prev.filter(t => t.id !== task.id))
              }
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </main>
  );
}
