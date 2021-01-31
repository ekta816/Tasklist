import React, { useState } from "react";
import SaveTaskButton from "./SaveTaskButton";

export default function CreateNewTask(props) {
  const [task, setTask] = useState({
    id: 0,
    title: "",
    priority: "",
    completed: false,
    date: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setTask((prevTask) => {
      return {
        ...prevTask,
        [name]: value
      };
    });
  }

  function addNewTask() {
    //console.log(task);
    props.addTask(task);
    setTask({
      title: "",
      priority: "",
      completed: false,
      date: ""
    });
  }

  return (
    <div style={{ display: props.displayOn }}>
      <form className="task-title">
        <input
          name="title"
          onChange={handleChange}
          value={task.title}
          placeholder="Create a new Task"
        />
        <SaveTaskButton title={task.title} addNewTask={addNewTask} />
      </form>
    </div>
  );
}
