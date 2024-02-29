import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";
// const myTasks = [
//   {
//     id: "1",
//     text: "Listen to the Sound",
//     date: "March 8 at 4:03pm",
//     reminder: true,
//   },

//   {
//     id: "2",
//     text: "Walking Out",
//     date: "March 9 at 2:15am",
//     reminder: true,
//   },

//   {
//     id: "3",
//     text: "Checking things",
//     date: "March 10 at 6:34am",
//     reminder: false,
//   },

//   {
//     id: "4",
//     text: "Ooh! Whirlwind",
//     date: "April 21 at 8:12pm",
//     reminder: false,
//   },
// ];

function App() {
  const [tasks, setTasks] = useState([]);
  const [toggleForm, setToggleForm] = useState(false);
  // A way to add tasks using props
  const addTask = async (task) => {
    const response = await fetch("http://localhost:5000/myTasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await response.json();
    setTasks([...tasks, data]);
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const anotherTask = { ...tasks, id };
    // setTasks([...myTasks, anotherTask]);
  };

  // fetch API call from json server
  useEffect(() => {
    const holdData = async () => {
      const dataFetched = await fetchData();
      setTasks(dataFetched);
    };

    holdData();
  }, []);

  // fetch API call from json server
  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/myTasks");
    const data = await response.json();
    return data;
  };

  // update reminder from json server
  const updateReminder = async (id) => {
    const response = await fetch(`http://localhost:5000/myTasks/${id}`);
    const data = await response.json();
    return data;
  };
  // A way to delete tasks using props
  const deleteTask = async (del) => {
    await fetch(`http://localhost:5000/myTasks/${del}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id != del));
  };

  // lets toggle the reminder boolean values
  const toggleReminder = async (rem) => {
    const toggleTask = await updateReminder(rem);
    const holdUpdatedTasks = { ...toggleTask, reminder: !toggleTask.reminder };

    const response = await fetch(`http://localhost:5000/myTasks/${rem}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(holdUpdatedTasks),
    });

    const data = await response.json();

    setTasks(
      tasks.map((task) =>
        task.id === rem ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  const handleToggleForm = () => {
    setToggleForm(!toggleForm);
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        showForm={handleToggleForm}
        addBtnStyle={toggleForm}
      />
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
      {/* <Route path='/about' component={About} /> */}
      <Footer />
    </div>

  );
}

export default App;
