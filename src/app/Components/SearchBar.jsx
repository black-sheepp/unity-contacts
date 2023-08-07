import React from "react";

const SearchBar = () => {
     return (
          <div>
            <input type="text" placeholder="Search Contact..." className="search-input" />
            <button type="submit" className="search-btn">Search</button>
          </div>
     );
};

export default SearchBar;
