import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorColor, setCursorColor] = useState("black");
  const [isVisible, setIsVisible] = useState(window.innerWidth > 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth > 1200);
    };

    const handleMouseMove = (event) => {
      if (!isVisible) return;

      setPosition({ x: event.clientX, y: event.clientY });

      if (event.clientX < window.innerWidth * 0.375) {
        setCursorColor("white");
      } else {
        setCursorColor("black");
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        width: "32px",
        height: "32px",
        backgroundColor: cursorColor,
        border: `3px solid ${cursorColor === "black" ? "white" : "black"}`,
        borderRadius: "50%",
        pointerEvents: "none",
        transition: "background-color 0.1s, border-color 0.1s, transform 0.1s",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
        opacity: 0.5,
      }}
    />
  );
};

export default CustomCursor;
