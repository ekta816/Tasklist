import React, { useState } from "react";
import Tasks from "./Tasks";
import CreateNewTask from "./CreateNewTask";

export default function MainCardPending(props) {
  function addTask(text) {
    props.addNewTask(text);
  }

  function taskCheckbox(task, id) {
    props.completeTask(task, id);
  }

  function onChangePriority(priority, id) {
    props.changePriority(priority, id);
  }

  function onDelete(index) {
    props.deleteTask(index);
  }

  function onDateChange(date, index) {
    //console.log(date);
    props.changeDate(date, index);
  }
  return (
    <div className="main-card">
      {props.tasks
        .filter(function (task) {
          return task.completed === false;
        })
        .map((task, index) => {
          return (
            <Tasks
              id={task.id}
              key={index}
              title={task.title}
              priority={task.priority}
              completed={task.completed}
              date={task.date}
              onCheckbox={taskCheckbox}
              changePriority={onChangePriority}
              deleteATask={onDelete}
              dateChanged={onDateChange}
            />
          );
        })}
      <div>
        <CreateNewTask displayOn={props.displayOn} addTask={addTask} />
      </div>
    </div>
  );
}
