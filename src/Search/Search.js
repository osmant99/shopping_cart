import React from "react";
import "./Search.css";
export default function Search({ setSearch, search }) {
  return (
    <>
      <input
        className="search-input"
        type="text"
        placeholder="Search items"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
}
