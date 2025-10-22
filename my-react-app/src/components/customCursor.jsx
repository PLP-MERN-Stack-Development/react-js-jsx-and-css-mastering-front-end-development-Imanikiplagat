import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const cursorStyle = {
    position: "fixed",
    top: position.y,
    left: position.x,
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    background: "rgba(100, 196, 255, 0.7)",
    boxShadow: "0 0 15px rgba(100, 247, 255, 0.9)",
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    transition: "transform 0.1s ease-out",
    zIndex: 9999,
  };

  return <div style={cursorStyle}></div>;
}
