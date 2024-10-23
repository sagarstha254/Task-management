import React, { useState } from "react";
import axios from "axios";

interface TaskFormProps {
  onTaskCreated: (task: any) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onTaskCreated }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const token = localStorage.getItem("token");

  const handleCreateTask = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://localhost:5000/api/tasks",
        {
          title,
          description,
          dueDate,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      onTaskCreated(data);
      setTitle("");
      setDescription("");
      setDueDate("");
    } catch (error) {
      console.log("Failed to create task", error);
    }
  };
  return (
    <form onSubmit={handleCreateTask} className="mb-4">
      <h2 className="text-xl mb-2">Create Task</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full mb-2"
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 w-full mb-2"
        required
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="border p-2 w-full mb-2"
        required
      />
      <button type="submit" className="bg-green-500 text-white p-2 w-full">
        Create Task
      </button>
    </form>
  );
};

export default TaskForm;
