import { Outlet } from "react-router-dom";
import React from "react";
import { MainContainer } from "./Base.styles";
import ErrorBoundary from "../error-boundary/ErrorBoundaryPage";

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
