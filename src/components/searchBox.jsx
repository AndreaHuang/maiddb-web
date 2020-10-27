import React, { useState } from "react";
const SearchBox = ({ name = "search", value="", handleSearch }) => {
  const [keyword, setKeyword] = useState(value);
  return (
    <form className="search-box">
      <input
        className="form-control text-input"
        type="search"
        placeholder="Maid Name"
        aria-label="Search by Maid Name"
        value={keyword}
        name={name}
        onChange={(e) => setKeyword(e.currentTarget.value)}
      />
      <button className="btn form-button search-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBox;
