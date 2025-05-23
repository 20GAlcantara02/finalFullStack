// components/TaskList.tsx
"use client";

import { TaskItem } from "./TaskItem";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
  return (
    <ul className="space-y-3">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          id={task.id}
          title={task.title}
          completed={task.completed}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
