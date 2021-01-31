import React from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

export default function CompletedButton(props) {
  function handleChange(event) {
    console.log(event.target);
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        textTransform: "initial",
        position: "absolute",
        top: "130px",
        left: "535px",
        // left: "-110px",
        // top: "44px",
        color: props.color //#1F1F1F
      }
    }
  }));
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <Button onClick={handleChange}>Completed</Button>
      </div>
    </div>
  );
}
