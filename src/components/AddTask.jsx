import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  const clickSubmit = (e) => {
    e.preventDefault();

    if(!text) {
      alert('Please add a task');
      return;
    }

    onAdd({ text, date, reminder });

    setText('');
    setDate('');
    setReminder(false);
  }

  return (
    <form className="form" onSubmit={clickSubmit}>
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input
          type="text"
          id="task"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="day">Add Day</label>
        <input
          type="text"
          id="day"
          placeholder="Add Day & Time"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-control checkbox">
        <label htmlFor="reminder">Save Reminder</label>
        <input
          type="checkbox"
          id="reminder"
          value={reminder}
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <div className="form-control">
        <input className="btn" type="submit" value="Save Task" />
      </div>
    </form>
  );
};

export default AddTask;
