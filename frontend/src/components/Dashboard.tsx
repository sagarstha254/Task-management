import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskForm from "./Task/TaskForm";
import TaskList from "./Task/TaskList";

const Dashboard: React.FC = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/tasks", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setTasks(data);
      } catch (error) {
        console.log("Failed to fetch tasks", error);
      }
    };
    fetchTasks();
  }, [token]);

  const handleTaskCreated = (newTask: any) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">Task Dashboard</h1>
      <TaskForm onTaskCreated={handleTaskCreated} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Dashboard;
