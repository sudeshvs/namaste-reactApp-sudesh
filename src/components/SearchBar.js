import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleChange = (e) => {
    setTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none"
      value={term}
      onChange={handleChange}
    />
  );
};

export default SearchBar;