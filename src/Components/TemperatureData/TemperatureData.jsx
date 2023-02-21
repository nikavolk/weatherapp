export const TemperatureData = ({ children, data }) => {
  if (data) {
    return (
      <li>
        <span>{children}:</span> {Math.round(data)}°C
      </li>
    );
  }
};
