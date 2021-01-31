import React from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

export default function PendingButton(props) {
  function handleChange(event) {
    console.log(event.target);
  }
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        textTransform: "initial",
        position: "absolute",
        top: "130px",
        left: "465px",
        // top: "80px",
        // left: "-190px",
        color: props.color
      }
    }
  }));
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <Button onClick={handleChange}>Pending</Button>
      </div>
    </div>
  );
}
