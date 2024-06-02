import React from "react";

const ShowAllProjectsButton = ({ onClick }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    onClick?.();
  };
  return (
    <div className="mx-auto" style={{ position: "relative" }}>
      <button className="see  m-3 px-5 ">Explore More</button>
    </div>
  );
};

export default ShowAllProjectsButton;
