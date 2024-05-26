// Code: ABAB01D

import React, { useState } from "react";
import style from "../css/Search.module.css"; // Import the CSS module

const SearchBox = ({ suggestions }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length >= 3) {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleInputBlur = () => {
    setInputValue("");
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className={style.searchBox}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        placeholder="Search..."
        className={style.input}
      />
      {showSuggestions && (
        <ul className={style.suggestionsList}>
          {filteredSuggestions.length > 0 ? (
            filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className={style.suggestionItem}
              >
                {suggestion}
              </li>
            ))
          ) : (
            <li className={style.suggestionItem}>Not Matched</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
