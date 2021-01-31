import React from "react";
import { withStyles } from "@material-ui/styles";
import { red } from "@material-ui/core/colors";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const RedCheckbox = withStyles({
  root: {
    color: "#FF6159",
    "&$checked": {
      color: "#FF6159"
    }
  },
  checked: {}
})((props) => <Checkbox color="default" {...props} />);

export default function CheckBoxRed() {
  const [state, setState] = React.useState({
    checkedG: false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div className="checkbox-priority">
      <FormControlLabel
        fontSize="medium"
        control={
          <RedCheckbox
            fontSize="medium"
            checked={state.checkedG}
            onChange={handleChange}
            name="checkedG"
          />
        }
        label="Task 1"
      />
    </div>
  );
}
