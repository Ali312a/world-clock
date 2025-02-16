import React, { useState, useEffect } from "react";

const Clock = ({ city, timezone }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options = { timeZone: timezone, hour: '2-digit', minute: '2-digit', second: '2-digit' };
      const timeString = new Date().toLocaleTimeString('en-US', options);
      setTime(timeString);
    };

    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="clock">
      <h2>{city}</h2>
      <p>{time}</p>
    </div>
  );
};

export default Clock;

