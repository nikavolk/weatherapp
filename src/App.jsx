import { useState, useRef } from "react";
import LocationData from "./Components/LocationData/LocationData";
import SearchHistory from "./Components/SearchHistory/SearchHistory";
import "./App.style.scss";
import ErrorMessage from "./Components/ErrorMessage/ErrorMessage";
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

    // empty input check
    if (inputValue === "" && currentInputValue === "") {
      setError("Input cannot be empty");
      return;
    }

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${currentInputValue}&units=metric&appid=${
        import.meta.env.VITE_API_KEY
      }`,
    )
      .then((response) => {
        setError("");

        if (response.ok) {
          return response.json();
        }

        setError("Enter a valid place name");
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
        throw new Error("Something went wrong", error);
      });
  };

  // submit on Enter keypress
  const enterKeyHandler = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
      setInputValue("");
    }
  };

  const handleClick = (e) => {
    setInputValue(e.target.innerText);
    inputRef.current.value = e.target.innerText;
    handleSubmit(e);
  };

  const inputClickHandler = () => {
    setInputValue("");
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <SearchInput
          inputValue={inputValue}
          inputRef={inputRef}
          setInputValue={setInputValue}
          enterKeyHandler={enterKeyHandler}
          inputClickHandler={inputClickHandler}
        />
        <button type="submit">Submit</button>
      </form>
      <ErrorMessage error={error} />

      <SearchHistory
        limitedEntries={limitedEntries}
        handleClick={handleClick}
      />

      <LocationData
        data={data}
        handleClick={handleClick}
        isLoading={isLoading}
      />
    </main>
  );
}

export default App;
