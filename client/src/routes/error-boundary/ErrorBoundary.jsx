import React from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

// UPDATED ERROR BOUNDARY COMPONENT
const ErrorFallback = ({ resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>Sorry, something went wrong:</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
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
