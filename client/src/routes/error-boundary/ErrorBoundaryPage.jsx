import React from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import PrimaryButton from "../../components/buttons-template/primary-button/PrimaryButton.component";
import { ErrorBoundaryContainer, ErrorInfo } from "./ErrorBoundary.styles";

// UPDATED ERROR BOUNDARY COMPONENT
const ErrorFallback = ({ resetErrorBoundary }) => {
  return (
    <ErrorBoundaryContainer>
      <ErrorInfo>
        <p>Sorry, something went wrong:</p>
        <PrimaryButton functionName={resetErrorBoundary} span="Try again" />
      </ErrorInfo>
    </ErrorBoundaryContainer>
  );
};

ErrorFallback.propTypes = {
  error: PropTypes.object.isRequired,
  resetErrorBoundary: PropTypes.func.isRequired,
};

const ErrorBoundary = ({ children }) => {
  const navigate = useNavigate();
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        navigate("/");
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
};

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
