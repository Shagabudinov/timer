import React from "react";

const Timer = ({ seconds }) => {
  const formatTime = (second) => {
    let hrs = Math.floor(second / 3600);
    let mins = Math.floor((second % 3600) / 60);
    let secs = Math.floor(second % 60);
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      <p>{formatTime(seconds)}</p>
    </div>
  );
};

export default Timer;
