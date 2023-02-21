import "./ErrorMessage.style.scss";

const ErrorMessage = ({ error }) => {
  if (error) {
    return <div className="error">{error}</div>;
  }
};

export default ErrorMessage;
