import { useState } from "react";
import { motion } from "motion/react";

export default function LayoutAnimation() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div className="toggle-container">
      <button
        className="toggle-button"
        style={{
          ...container,
          justifyContent: "flex-" + (isOn ? "start" : "end"),
          backgroundColor: isOn ? "green" : "red",
        }}
        onClick={toggleSwitch}
      >
        <motion.div
          style={handle}
          layout
          transition={{
            type: "spring",
            visualDuration: 0.2,
            bounce: 0.2,
          }}
        />
      </button>
    </div>
  );
}

const container = {
  width: 100,
  height: 50,
  position: "relative",
  backgroundColor: "red",
  borderRadius: 50,
  cursor: "pointer",
  display: "flex",
  padding: 10,
};

const handle = {
  width: "50px",
  height: "50px",
  backgroundColor: "#9911ff",
  borderRadius: "50%",
  position: "absolute",
  padding: "1rem",
  top: 0,
};
