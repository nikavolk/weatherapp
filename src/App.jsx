import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>
      <button type="submit">Search!</button>
    </form>
  );
}

export default App;
