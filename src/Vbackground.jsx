import React, { useEffect, useRef } from 'react';

function Vbackground() {
  const vantaRef = useRef(null);

  useEffect(() => {
    // 确保VANTA全局变量可用
    if (window.VANTA) {
      vantaRef.current = window.VANTA.TOPOLOGY({
        el: "#vanta-background",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x2a99bb
      });
    }

    return () => {
      if (vantaRef.current) {
        vantaRef.current.destroy();
      }
    };
  }, []);

  return <div id="vanta-background" style={{ width: '100%', height: '100vh' }}></div>;
}

export default Vbackground;