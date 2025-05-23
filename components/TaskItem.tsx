// components/TaskItem.tsx
"use client";

import { Button } from "@/components/ui/Button";

type Task = {
  id: number;
  title: string;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export function TaskItem({ id, title, completed, onToggle, onDelete }: Task) {
  return (
    <li
      className={`flex items-center justify-between p-3 rounded shadow ${
        completed ? "bg-green-100" : "bg-white"
      }`}
    >
      <span
        className={`cursor-pointer ${
          completed ? "line-through text-gray-500" : ""
        }`}
        onClick={() => onToggle(id)}
      >
        {title}
      </span>
      <Button variant="outline" onClick={() => onDelete(id)}>
        Delete
      </Button>
    </li>
  );
}
