import React, { useState, useEffect } from "react";

function Background() {
  const [hue, setHue] = useState(0); // Initial hue value
  const [bgColor, setBgColor] = useState(`hsl(${hue}, 30%, 70%)`); // Initial background color

  // Function to calculate the neighboring hue
  const getNextHue = () => {
    const step = 30; // Adjust the step to control the hue change
    return (hue + step) % 360; // Limit the hue value to the range [0, 360)
  };

  useEffect(() => {
    const changeColorInterval = setInterval(() => {
      const nextHue = getNextHue();
      setHue(nextHue);
      setBgColor(`hsl(${nextHue}, 30%, 70%)`);
    }, 5000); // Change color every 5 seconds

    return () => {
      clearInterval(changeColorInterval);
    };
    // eslint-disable-next-line
  }, [hue]);

  return (
    <div className="background" style={{ backgroundColor: bgColor }}></div>
  );
}

export default Background;
