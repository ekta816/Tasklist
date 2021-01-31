import React from "react";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";

export default function CancelButton(props) {
  function deleteFunction() {
    //console.log(props.id);
    props.onDelete(props.id);
  }

  return (
    <div
      className="cancel-button"
      onClick={deleteFunction}
      style={{ cursor: "pointer" }}
    >
      <ClearOutlinedIcon
        style={{
          fontSize: 14,
          position: "absolute",
          left: 1,
          top: 1,
          zIndex: 2,
          color: "#FF6159"
        }}
      />
    </div>
  );
}
