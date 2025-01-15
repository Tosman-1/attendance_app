import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div
      onClick={toggleSwitch}
      style={{ ...styles.toggle, backgroundColor: isOn ? " #020659" : "#ccc" }}
    >
      <div
        style={{
          ...styles.knob,
          transform: isOn ? "translateX(25px)" : "translateX(0)",
        }}
      />
    </div>
  );
}

const styles = {
  toggle: {
    width: "55px",
    height: "30px",
    borderRadius: "15px",
    cursor: "pointer",
    position: "relative",
    display: "inline-block",
    transition: "background-color 0.3s ease",
  },
  knob: {
    width: "23px",
    height: "23px",
    borderRadius: "50%",
    backgroundColor: "white",
    position: "absolute",
    top: "2.5px",
    left: "2.5px",
    transition: "transform 0.3s ease",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
  },
};

export default Toggle;
