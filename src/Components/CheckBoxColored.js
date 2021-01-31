import React from "react";
import { withStyles } from "@material-ui/styles";
import { orange } from "@material-ui/core/colors";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function CheckBoxColored(props) {
  const OrangeCheckbox = withStyles({
    root: {
      color: props.color, //"#FB8333",
      "&$checked": {
        color: props.color
      }
    },
    checked: {}
  })((props) => <Checkbox color="default" {...props} />);

  const [state, setState] = React.useState({
    checkedG: props.completed
  });

  const handleChange = (event) => {
    //console.log(event.target.checked);
    //console.log(props.id);
    props.onCheck(event.target.checked, props.id);
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className="checkbox-priority">
      <FormControlLabel
        fontSize="medium"
        control={
          <OrangeCheckbox
            fontSize="medium"
            checked={props.completed}
            onChange={handleChange}
            name="checkedG"
          />
        }
        label={props.title}
      />
    </div>
  );
}
