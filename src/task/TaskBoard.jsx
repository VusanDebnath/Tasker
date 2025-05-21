import {useState} from "react";

import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";


export default function TaskBoard() {
  const defaultTasks = {
    id: crypto.randomUUID(),
    title: "Task 1",
    description: "Description for Task 1",
    tags: ["Web", "ReactJs", "Javascript"],
    priority: "High",
    isFavorite: true,
  };

  const [tasks, setTasks] = useState([defaultTasks]); // Parent-এর state 

  // এই function টা Child কে দিবো
  const handleUpdate = (newValue) => {
    setTasks(newValue); // Parent-এর state update করছে
  };

  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions onUpdate={handleUpdate} currentTasks={tasks}/>
          
          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
}
