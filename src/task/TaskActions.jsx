export default function TaskActions({ onUpdate ,currentTasks }) {
  function handleAddTask() {
    // onUpdate(currentTasks + 1); // Update the parent component's state
    // You can also add logic to open a modal or redirect to a new task page
    
    // For example, if you have a modal component:
    // setShowModal(true); 

    const defaultTasks = {
      id: crypto.randomUUID(),
      title: "Task 1",
      description: "Description for Task 1",
      tags: ["Web", "ReactJs", "Javascript"],
      priority: "High",
      isFavorite: true,
    };
    
    const newTasks = [...currentTasks, defaultTasks]; // Create a new array with the new task
    onUpdate(newTasks); // Update the parent component's state with the new task

    // Logic to add a new task
    console.log("Add Task button clicked");
  }
  return (
    <div className="mb-14 items-center justify-between sm:flex">
      <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
      <div className="flex items-center space-x-5">
        <button
          className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
          onClick={handleAddTask}
        >
          Add Task
        </button>
        <button className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold">
          Delete All
        </button>
      </div>
    </div>
  );
}
