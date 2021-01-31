import React from "react";
import { withStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

export default function PriorityButtonLow(props) {
  const StyledButton = withStyles({
    root: {
      background: props.color,
      borderRadius: 50,
      border: 0,
      color: "white",
      height: 28,
      width: 60,
      padding: "4px 16px",
      "&:hover": {
        backgroundColor: props.color, //#CBCBCB
        color: "#FFF"
      },
      position: "absolute",
      top: "70px",
      right: "167px"
    },
    label: {
      textTransform: "initial"
    }
  })(Button);

  function handleClick(event) {
    var text = event.target.innerText;
    props.changePriority(text);
  }
  return <StyledButton onClick={handleClick}>Low</StyledButton>;
}
