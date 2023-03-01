import "./SearchInput.style.scss";

const SearchInput = ({ inputValue, inputRef, setInputValue, handleSubmit }) => {
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        ref={inputRef}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter name of a city"
        onKeyDown={enterKeyHandler}
        onClick={handleInputClick}
      />
    </form>
  );
};

export default SearchInput;
