import React, { useEffect, useRef } from "react";

function Vbackground() {
  const vantaRef = useRef(null);

  useEffect(() => {
    if (window.VANTA) {
      vantaRef.current = window.VANTA.TOPOLOGY({
        el: "#vanta-background",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x2a99bb,
      });
    }

    return () => {
      if (vantaRef.current) {
        vantaRef.current.destroy();
      }
    };
  }, []);

  return (
    <div
      id="vanta-background"
      style={{
        position: "absolute",
        width: "100%",
        minHeight: "100vh",
        height: "auto",
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    ></div>
  );
}

export default Vbackground;
