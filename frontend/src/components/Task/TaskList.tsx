import React from "react";

interface TaskListProps {
  tasks: any[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div>
      <h2 className="text-xl mb-2">Your Tasks</h2>
      {tasks.length > 0 ? (
        <ul className="list-disc pl-5">
          {tasks.map((task) => (
            <li key={task.id} className="mb-2">
              <strong>{task.title}</strong> -{task.description} (Due:
              {new Date(task.dueDate).toLocaleDateString()})
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks available</p>
      )}
    </div>
  );
};

export default TaskList;
