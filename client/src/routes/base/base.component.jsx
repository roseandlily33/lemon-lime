import { Outlet } from "react-router-dom";
import React from "react";
import { MainContainer } from "./base.styles";
import ErrorBoundary from "../error-boundary/ErrorBoundary";

const BasePage = React.memo(() => {
  return (
    <ErrorBoundary>
      <MainContainer>
        <Outlet />
      </MainContainer>
    </ErrorBoundary>
  );
});

BasePage.displayName = "BasePage";

export default BasePage;
