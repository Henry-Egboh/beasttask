import Task from "./Task";

const Tasks = ({ newTasks, onDelete, onToggle }) => {
    // setTasks([...tasks, {id: '4', text: 'Watch this now', date: 'April 4 at 12:12pm', reminder: true}]);
  return <>
    {newTasks.map((task) => (<Task key={task.id} myTask={task} clickDelete={onDelete} toggleOnTaskClick={onToggle} />))}
  </>;
};

export default Tasks;
