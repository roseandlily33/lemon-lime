import React from "react";

const ChevronLeft = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="icon icon-cheveron-left-circle"
    >
      <circle cx="12" cy="12" r="10" className="primary" />
      <path
        className="secondary"
        d="M13.7 15.3a1 1 0 0 1-1.4 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.4 1.4L10.42 12l3.3 3.3z"
      />
    </svg>
  );
};

export default ChevronLeft;
