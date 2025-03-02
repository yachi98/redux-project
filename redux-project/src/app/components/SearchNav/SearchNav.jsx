"use client";

import React, { useState } from "react";
import { useAppSelector } from "../../redux/store";

const SearchNav = () => {
  const { stocksData } = useAppSelector((state) => state.stocksData);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div>
      <input
        onChange={() => setShowDropdown(!showDropdown)}
        type="text"
        placeholder="Search..."
      />
      {showDropdown &&
        Object.entries(stocksData).map(([stock, value]) => (
          <div key={stock}>{value}</div>
        ))}
    </div>
  );
};

export default SearchNav;
