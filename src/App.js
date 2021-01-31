import "../public/styles.css";
import React, { useState } from "react";
import Bottom from "./Components/Bottom";
import Top from "./Components/Top";
import MainCardPending from "./Components/MainCardPending";
import DateBlock from "./Components/DateView";
import TaskCount from "./Components/TaskCount";
import AddIcon from "@material-ui/icons/Add";
import MainCardCompleted from "./Components/MainCardCompleted";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import moment from "moment";

export default function App() {
  const [isExpanded, setExpanded] = useState(true);
  const [displayOn, setDisplayOn] = useState("none");
  const [id, setId] = useState(-1);
  const [data, setData] = useState([]);
  function handleChange(event) {
    if (event.target.innerText === "Pending") {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }
  function createNewTask() {
    if (displayOn === "none") {
      setDisplayOn("block");
    } else {
      setDisplayOn("none");
    }
  }

  function onAddTask(newTask) {
    //console.log(newTask);
    var i = id;
    i++;
    setId(i);
    newTask.id = i;
    var date = new Date();
    var month = moment(date).format("MMM");
    var year = moment().format("YYYY");
    var day = moment().format("Do");
    newTask.date = month + " " + day + ", " + year;
    setData((prevTasks) => {
      return [...prevTasks, newTask];
    });
    createNewTask();
  }

  function onCheckTask(taskComplete, index) {
    var newArr = [...data];
    newArr[index].completed = taskComplete;
    setData(newArr);
  }

  function onChangePriority(newPriority, index) {
    var arr = [...data];
    // console.log(newArr[index].priority);
    arr[index].priority = newPriority;
    setData(arr);
  }

  function onDeleteTask(index) {
    var deletedArr = [...data];
    deletedArr = deletedArr.filter(function (item) {
      return item.id !== index;
    });

    setData(deletedArr);
  }

  function onDateChange(newDate, index) {
    var changedDate = [...data];
    changedDate[index].date = newDate;
    setData(changedDate);
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        textTransform: "initial",
        top: "125px",
        position: "absolute",
        color: "#1F1F1F"
      }
    }
  }));
  const classes = useStyles();
  return (
    <div className="App">
      <div className={classes.root}>
        <Button
          name="pending"
          onClick={handleChange}
          style={{ color: isExpanded ? "#1F1F1F" : "#AFAFAF", left: 465 }}
        >
          Pending
        </Button>
      </div>
      <div className={classes.root}>
        <Button
          name="completed"
          onClick={handleChange}
          style={{ color: isExpanded ? "#AFAFAF" : "#1F1F1F", left: 535 }}
        >
          Completed
        </Button>
      </div>
      <div className="pending-completed"></div>
      {isExpanded ? (
        <MainCardPending
          displayOn={displayOn}
          tasks={data}
          addNewTask={onAddTask}
          completeTask={onCheckTask}
          changePriority={onChangePriority}
          deleteTask={onDeleteTask}
          changeDate={onDateChange}
        />
      ) : (
        <MainCardCompleted
          displayOn={displayOn}
          tasks={data}
          completeTask={onCheckTask}
          changePriority={onChangePriority}
          deleteTask={onDeleteTask}
          changeDate={onDateChange}
        />
      )}
      <div className="new-task-button">
        <Fab onClick={createNewTask}>
          <AddIcon />
        </Fab>
      </div>
      <DateBlock />
      <TaskCount
        count={
          data.filter(function (task) {
            return task.completed === false;
          }).length
        }
      />
      <Bottom />
      <Top />
    </div>
  );
}
