import { useState, useRef } from "react";
import LocationData from "./Components/LocationData/LocationData";
import SearchHistory from "./Components/SearchHistory/SearchHistory";
import "./App.style.scss";
import { ErrorMessage } from "./Components/ErrorMessage/ErrorMessage";
import SearchInput from "./Components/SearchInput/SearchInput";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [searchHistory, setSearchHistory] = useState("");
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

  // show only 5 history entries
  const limitedEntries = searchHistory.slice(0, 5);

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentInputValue = inputRef.current.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentInputValue}&units=metric&appid=${
      import.meta.env.VITE_API_KEY
    }`;

    // empty input check
    if (inputValue === "" && currentInputValue === "") {
      setError("Input cannot be empty");
      return;
    }
    setIsLoading(true);

    fetch(url)
      .then((response) => {
        setError("");

        if (response.ok) {
          return response.json();
        }

        setError("Enter a valid place name");
        setIsLoading(false);
        throw new Error("Enter a valid place name");
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        if (!searchHistory.includes(data.name)) {
          setSearchHistory((searchHistory) => [data.name, ...searchHistory]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <SearchInput
          inputValue={inputValue}
          inputRef={inputRef}
          setInputValue={setInputValue}
          handleSubmit={handleSubmit}
        />
        <button type="submit">Submit</button>
      </form>
      {error && <ErrorMessage>{error}</ErrorMessage>}

      <SearchHistory
        limitedEntries={limitedEntries}
        setInputValue={setInputValue}
        inputRef={inputRef}
        handleSubmit={handleSubmit}
      />

      <LocationData data={data} isLoading={isLoading} />
    </main>
  );
}

export default App;
