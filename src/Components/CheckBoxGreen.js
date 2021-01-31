import React from "react";
import { withStyles } from "@material-ui/styles";
import { green } from "@material-ui/core/colors";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const GreenCheckbox = withStyles({
  root: {
    color: "#5FCD8D",
    "&$checked": {
      color: "#5FCD8D"
    }
  },
  checked: {}
})((props) => <Checkbox color="default" {...props} />);

export default function CheckBoxGreen() {
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
          <GreenCheckbox
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
