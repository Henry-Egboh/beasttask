import { FaTimes } from 'react-icons/fa';
const Task = ({ myTask, clickDelete, toggleOnTaskClick }) => {
  return (
    <div className={`taskComponent ${myTask.reminder ? 'reminder' : ''}`} onDoubleClick={() => toggleOnTaskClick(myTask.id)}>
        <h3>{myTask.text} <FaTimes className='faTimes' onClick={() => clickDelete(myTask.id)} /> </h3>
        <p>{myTask.date}</p>
    </div>
  )
}

export default Task;