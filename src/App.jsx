import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

const myTasks = [
  {
    id: "1",
    text: "Listen to the Sound",
    date: "March 8 at 4:03pm",
    reminder: true,
  },

  {
    id: "2",
    text: "Walking Out",
    date: "March 9 at 2:15am",
    reminder: true,
  },

  {
    id: "3",
    text: "Checking things",
    date: "March 10 at 6:34am",
    reminder: false,
  },

  {
    id: "4",
    text: "Ooh! Whirlwind",
    date: "April 21 at 8:12pm",
    reminder: false,
  },
];

function App() {
  const [tasks, setTasks] = useState(myTasks);
  const [toggleForm, setToggleForm] = useState(false);
  // A way to add tasks using props
  const addTask = (tasks) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const anotherTask = { ...tasks, id };
    setTasks([...myTasks, anotherTask]);
  };
  // A way to delete tasks using props
  const deleteTask = (del) => {
    setTasks(tasks.filter((task) => task.id != del));
  };

  // lets toggle the reminder boolean values
  const toggleReminder = (rem) => {
    setTasks(
      tasks.map((task) =>
        task.id === rem ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const handleToggleForm = () => {
    setToggleForm(!toggleForm);
  };

  return (
    <div className="container">
      <Header title="Task Tracker" showForm={handleToggleForm} addBtnStyle={toggleForm} />
      {toggleForm && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          newTasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
      ) : (
        "Nothing to show 😍"
      )}
    </div>
  );
}

export default App;
