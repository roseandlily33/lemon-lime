import { Outlet } from "react-router-dom";
import React from "react";

const UserBase = React.memo(() => {
  return (
    <>
      <Outlet />
    </>
  );
});

UserBase.displayName = "UserBase";

export default UserBase;
