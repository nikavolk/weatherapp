import { useState } from "react";
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

  // show only 5 history entries
  const limitedEntries = searchHistory.slice(0, 5);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=${
      import.meta.env.VITE_API_KEY
    }`;

    // empty input check
    if (inputValue === "") {
      setError("Input cannot be empty");
      return;
    }
    setIsLoading(true);

    await fetch(url)
      .then((response) => {
        setError("");

        if (response.ok) {
          return response.json();
        }

        if (response.status === 404) {
          setError("This city or town does not exist. Enter a valid name!");
          setIsLoading(false);
          throw new Error(
            "This city or town does not exist. Enter a valid name!",
          );
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
      <SearchInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSubmit={handleSubmit}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}

      <SearchHistory
        limitedEntries={limitedEntries}
        setInputValue={setInputValue}
        handleSubmit={handleSubmit}
      />

      <LocationData data={data} isLoading={isLoading} />
    </main>
  );
}

export default App;
