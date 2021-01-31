import React from "react";

export default function TaskCount(props) {
  return (
    <div className="task-count">
      <div>
        <p className="count">{props.count}</p>
        <div className="count-label">
          <p className="count-label-text">Tasks</p>
        </div>
      </div>
    </div>
  );
}
