import React from "react";
import "date-fns";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
import DateFnsUtils from "@date-io/date-fns";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { DatePicker } from "@material-ui/pickers";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import blue from "@material-ui/core/colors/blue";
import lightBlue from "@material-ui/core/colors/lightBlue";
const materialTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: lightBlue
  }
});
export default function DataPicker(props) {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    //console.log(date);
    setSelectedDate(date);
    props.selectDate(date, props.id);
  };

  return (
    <div className="calendar-circle">
      <ThemeProvider theme={materialTheme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            InputProps={{
              disableUnderline: true
            }}
            style={{ left: -9, top: -22 }}
            id="date-picker-dialog"
            label=""
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
            keyboardIcon={
              <CalendarTodayOutlinedIcon
                style={{ fontSize: 12, position: "absolute" }}
              />
            }
          />
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </div>
  );
}
