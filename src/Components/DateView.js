import React from "react";

export default function DateView() {
  var date = new Date();
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const currentDay = days[date.getDay()];
  const currentMonth = months[date.getMonth()];
  const currentDate = date.getDate();
  const currentYear = date.getFullYear();
  return (
    <div className="date-block">
      <div>
        <p className="current-day">{currentDay}</p>
        <p className="current-month">
          {currentMonth}, {currentDate}
        </p>
        <p className="current-year">{currentYear}</p>
      </div>
    </div>
  );
}
