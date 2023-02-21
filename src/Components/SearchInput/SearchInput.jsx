import "./SearchInput.style.scss";

const SearchInput = ({
  inputValue,
  inputRef,
  setInputValue,
  enterKeyHandler,
}) => {
  return (
    <input
      type="text"
      value={inputValue}
      ref={inputRef}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Enter name of a city"
      onKeyDown={enterKeyHandler}
    />
  );
};

export default SearchInput;
