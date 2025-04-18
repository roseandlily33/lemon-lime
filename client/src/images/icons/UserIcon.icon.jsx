import React from "react";
const UserIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="icon icon-user"
    >
      <path className="primary" d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
      <path
        className="secondary"
        d="M21 20v-1a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v1c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2z"
      />
    </svg>
  );
};

export default UserIcon;
