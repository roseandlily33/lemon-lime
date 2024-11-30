import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
        <div role="alert">
            <p>Sorry, something went wrong:</p>
            <span>{error.message}</span>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    );
};

const ErrorBoundary = ({ children }) => {
    const navigate = useNavigate();
    return (
        <ReactErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
                navigate('/')
            }}
        >
            {children}
        </ReactErrorBoundary>
    );
};

export default ErrorBoundary;