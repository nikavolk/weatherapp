import { TemperatureData } from "../TemperatureData/TemperatureData";

const LocationData = ({ data, isLoading }) => {
  if (isLoading) {
    return <h2>Loading</h2>;
  }

  if (data) {
    return (
      <>
        <h1>{data.name}</h1>
        <ul>
          <TemperatureData data={data.main.temp}>
            Current temperature
          </TemperatureData>
          <TemperatureData data={data.main.feels_like}>
            Feels like
          </TemperatureData>
          <TemperatureData data={data.main.temp_min}>
            Minimum temperature
          </TemperatureData>
          <TemperatureData data={data.main.temp_max}>
            Maximum temperature
          </TemperatureData>
          <li>
            <span>Humidity:</span> {data.main.humidity}%
          </li>
        </ul>
      </>
    );
  }
};

export default LocationData;
