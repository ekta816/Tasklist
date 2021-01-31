import React from "react";
import { withStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

export default function SaveTaskButton(props) {
  const StyledButton = withStyles({
    root: {
      background: "#5FCD8D",
      borderRadius: 50,
      border: 0,
      color: "white",
      height: 28,
      width: 60,
      padding: "4px 16px",
      "&:hover": {
        backgroundColor: "#5FCD8D", //#CBCBCB
        color: "#FFF"
      },
      position: "absolute",
      top: "70px",
      right: "10px"
    },
    label: {
      textTransform: "initial"
    }
  })(Button);

  function handleClick(event) {
    //var text = event.target.innerText;
    // console.log(props.title);
    props.addNewTask(props.title);
  }
  return <StyledButton onClick={handleClick}>Save</StyledButton>;
}
