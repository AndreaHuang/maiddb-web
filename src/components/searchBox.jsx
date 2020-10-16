import React, { useState } from "react";
const SearchBox = ({ name = "search", handleSearch }) => {
  const [keyword, setKeyword] = useState("");
  return (
    <form className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Maid Name"
        aria-label="Search by Maid Name"
        value={keyword}
        name={name}
        onChange={(e) => setKeyword(e.currentTarget.value)}
      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBox;
