const SearchHistory = ({ limitedEntries, handleClick }) => {
  if (limitedEntries.length > 0) {
    return (
      <div>
        <h2>Search history</h2>
        <ul>
          {limitedEntries.map((entry, i) => (
            <li key={i}>
              <a href="#" onClick={handleClick}>
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
