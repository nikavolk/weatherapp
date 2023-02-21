const LocationData = ({ data, error, isLoading }) => {
  if (isLoading) {
    return <h2>Loading</h2>;
  }

  return (
    <>
      <h1>{data && data.name}</h1>
      <div>{data && `Current temperature: ${Math.round(data.main.temp)}`}</div>
      <div>{data && `Feels like: ${Math.round(data.main.feels_like)}`}</div>
      <div>
        {data && `Minimum temperature: ${Math.round(data.main.temp_min)}`}
      </div>
      <div>
        {data && `Maximum temperature: ${Math.round(data.main.temp_max)}`}
      </div>
      {error && `Error: ${error}`}
    </>
  );
};

export default LocationData;
