import React, { useEffect, useRef } from 'react';
import Navbar  from './components/Navbar.jsx'

function Vbackground( ) {
  const vantaRef = useRef(null);

  useEffect(() => {
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

  return <div id="vanta-background" style={{ position: 'absolute', width: '100%', minHeight: '100vh' , top: 0, left: 0, zIndex: 0 }} >
    


  </div>;
}

export default Vbackground;
