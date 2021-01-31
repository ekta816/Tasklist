import React, { useState, useEffect } from "react";
import CancelButton from "./CancelButton";
import CheckBoxGreen from "./CheckBoxGreen";
import CheckBoxColored from "./CheckBoxColored";
import CheckBoxRed from "./CheckBoxRed";
import DatePicker from "./DatePicker";
import PriorityButtonHigh from "./PriorityButtonHigh";
import PriorityButtonLow from "./PriorityButtonLow";
import PriorityButtonMedium from "./PriorityButtonMedium";
import moment from "moment";

export default function Tasks(props) {
  const [task, setTask] = useState({
    title: "",
    priority: "",
    completed: false,
    date: ""
  });
  const [date, setDate] = React.useState(props.date);
  const [colorLow, setColorLow] = useState(() => {
    if (props.priority === "Low" || props.priority === "") {
      return "#5FCD8D";
    } else {
      return "#CBCBCB";
    }
  });
  const [colorMedium, setColorMedium] = useState(() => {
    if (props.priority === "Medium" || props.priority === "") {
      return "#FB8333";
    } else {
      return "#CBCBCB";
    }
  });
  const [colorHigh, setColorHigh] = useState(() => {
    if (props.priority === "High" || props.priority === "") {
      return "#FF6159";
    } else {
      return "#CBCBCB";
    }
  });
  const [colorCheckBox, setColorCheckBox] = useState(() => {
    if (props.priority === "High") {
      return "#FF6159";
    } else if (props.priority === "Medium") {
      return "#FB8333";
    } else if (props.priority === "Low") {
      return "#5FCD8D";
    } else {
      return "#CBCBCB";
    }
  });

  // useEffect(() => {
  //   changePriority(props.priority);
  // });

  function getDate(newDate, index) {
    // var date = new Date();
    var month = moment(newDate).format("MMM");
    var year = moment(newDate).format("YYYY");
    var day = moment(newDate).format("Do");
    setDate(month + " " + day + ", " + year);
    props.dateChanged(month + " " + day + ", " + year, index);
  }
  function taskChecked(checked, id) {
    props.onCheckbox(checked, id);
  }

  function changePriority(text) {
    // {
    //   /* low: #5FCD8D medium: #FB8333 high:#FF6159 */
    // }
    if (text === "Low") {
      // console.log(text, props.id);
      setColorLow("#5FCD8D");
      setColorCheckBox("#5FCD8D");
      setColorMedium("#CBCBCB");
      setColorHigh("#CBCBCB");
    } else if (text === "Medium") {
      // console.log(text, props.id);

      setColorLow("#CBCBCB");
      setColorMedium("#FB8333");
      setColorCheckBox("#FB8333");
      setColorHigh("#CBCBCB");
    } else if (text === "High") {
      // console.log(text, props.id);

      setColorLow("#CBCBCB");
      setColorMedium("#CBCBCB");
      setColorHigh("#FF6159");
      setColorCheckBox("#FF6159");
    }
    props.changePriority(text, props.id);
  }
  function deleteATask(index) {
    //console.log(index);
    props.deleteATask(index);
  }

  return (
    <div>
      <div className="task-open">
        <CheckBoxColored
          id={props.id}
          color={colorCheckBox}
          title={props.title}
          completed={props.completed}
          onCheck={taskChecked}
        />
        <div>
          <p className="due-date">{date}</p>
          <CancelButton id={props.id} onDelete={deleteATask} />
          <DatePicker selectDate={getDate} id={props.id} />
        </div>

        <div className="priority-align">
          <PriorityButtonLow
            name="low"
            color={colorLow}
            changePriority={changePriority}
          />
          <PriorityButtonMedium
            name="medium"
            color={colorMedium}
            changePriority={changePriority}
          />
          <PriorityButtonHigh
            name="high"
            color={colorHigh}
            changePriority={changePriority}
          />
        </div>
      </div>
    </div>
  );
}
