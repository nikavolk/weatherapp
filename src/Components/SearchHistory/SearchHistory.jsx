const SearchHistory = ({
  limitedEntries,
  setInputValue,
  inputRef,
  handleSubmit,
}) => {
  const handleHistoryClick = (e) => {
    setInputValue(e.target.innerText);
    inputRef.current.value = e.target.innerText;
    handleSubmit(e);
  };
  if (limitedEntries.length > 0) {
    return (
      <div>
        <h2>Search history</h2>
        <ul>
          {limitedEntries.map((entry, i) => (
            <li key={i}>
              <a href={void 0} onClick={handleHistoryClick}>
                {entry}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default SearchHistory;
