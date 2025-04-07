import { Outlet } from "react-router-dom";
import React from "react";

const UserBaseTemplate = React.memo(() => {
  return (
    <>
      <Outlet />
    </>
  );
});

UserBaseTemplate.displayName = "UserBase";

export default UserBaseTemplate;
