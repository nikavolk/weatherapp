import { useState, useRef } from "react";
import LocationData from "./Components/LocationData/LocationData";
import SearchHistory from "./Components/SearchHistory/SearchHistory";
import "./App.style.scss";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [searchHistory, setSearchHistory] = useState("");
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

  const limitedEntries = searchHistory.slice(0, 5);

  const handleSubmit = () => {
    const currentInputValue = inputRef.current.value;
    if (inputValue === "" && currentInputValue === "") {
      setError("Input cannot be empty");
      return;
    }

    const getData = async () => {
      setIsLoading(true);

      const getPlace = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${currentInputValue}&limit=1&appid=${
          import.meta.env.VITE_API_KEY
        }`,
      );
      const responseGetPlace = await getPlace.json();

      if (responseGetPlace.length > 0) {
        const getPlaceData = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${
            responseGetPlace[0].lat
          }&lon=${responseGetPlace[0].lon}&units=metric&appid=${
            import.meta.env.VITE_API_KEY
          }`,
        );

        const responseGetPlaceData = await getPlaceData.json();

        setData(responseGetPlaceData);
        setIsLoading(false);
        if (!searchHistory.includes(currentInputValue)) {
          setSearchHistory((searchHistory) => [
            currentInputValue,
            ...searchHistory,
          ]);
        }

        setInputValue("");
        setError("");
      } else {
        setError("Enter a valid place name");
        setIsLoading(false);
        setInputValue("");
        throw new Error("Enter a valid place name");
      }
    };
    getData();
  };

  const enterKeyHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleClick = (e) => {
    setInputValue(e.target.innerText);
    inputRef.current.value = e.target.innerText;
    handleSubmit();
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          ref={inputRef}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter name of a city"
          onKeyDown={enterKeyHandler}
        />
      </form>

      <SearchHistory limitedEntries={limitedEntries} />

      <LocationData
        data={data}
        error={error}
        handleClick={handleClick}
        isLoading={isLoading}
      />
    </main>
  );
}

export default App;
