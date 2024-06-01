import { useState } from "react";

export const MUI = () => {
  const [color, setColor] = useState("#777");
  return (
    <svg
      width="55px"
      height="50px"
      viewBox="0 -26 256 256"
      version="1.1"
      preserveAspectRatio="xMidYMid"
      fill="#000000"
      onMouseEnter={() => setColor("#ff4753")}
      onMouseLeave={() => setColor("#777")}
    >
      <g strokeWidth="0"></g>
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <g>
        <g>
          <polygon
            fill={color}
            points="0 110.848 0 0 96 55.424 96 92.3733333 32 55.424 32 129.322667"
          ></polygon>
          <polygon
            fill={color}
            points="96 55.424 192 0 192 110.848 128 147.797333 96 129.322667 160 92.3733333 160 55.424 96 92.3733333"
          ></polygon>
          <polygon
            fill={color}
            points="96 129.322667 96 166.272 160 203.221333 160 166.272"
          ></polygon>
          <path
            d="M160,203.221333 L256,147.797333 L256,73.8986667 L224,92.3733333 L224,129.322667 L160,166.272 L160,203.221333 Z M224,55.424 L224,18.4746667 L256,5.68434189e-14 L256,36.9493333 L224,55.424 Z"
            fill={color}
          ></path>
        </g>
      </g>
    </svg>
  );
};
