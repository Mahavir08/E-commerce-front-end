import React, { useState } from "react";

const Search = ({ history }) => {
  const [keyword, setkeyword] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push(`/`);
    }
  };

  return (
    <form className="d-flex pt-2" onSubmit={searchHandler}>
      <input
        type="search"
        className="form-control"
        placeholder="Enter a Product Name..."
        // value={keyword}
        onChange={(e) => {
          setkeyword(e.target.value);
        }}
      />
      &nbsp;
      <button className="btn btn-primary">Search</button>
    </form>
  );
};

export default Search;
