import React from "react";

const ShowAllProjectsButton = ({ onClick }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    onClick?.();
  };
  return (
    <div className="mx-auto position-relative">
      <button className="default-button">Explore More</button>
    </div>
  );
};

export default ShowAllProjectsButton;
