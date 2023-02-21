const SearchHistory = ({ limitedEntries, handleHistoryClick }) => {
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
