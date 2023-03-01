import "./SearchInput.style.scss";

const SearchInput = ({ inputValue, setInputValue, handleSubmit }) => {
  const handleInputClick = () => {
    setInputValue("");
  };

  // submit on Enter key press
  const enterKeyHandler = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter name of a city"
        onKeyDown={enterKeyHandler}
        onClick={handleInputClick}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchInput;
