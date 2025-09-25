import React from "react";

function CountryFilter({ value, onChange }) {
  const regions = ["All", "Asia", "Europe"];
  return (
    <div className="px-filter">
      {regions.map((r) => (
        <button
          key={r}
          className={`px-filter__btn ${
            value === r ? "px-filter__btn--active" : ""
          }`}
          onClick={() => onChange(r)}
        >
          {r}
        </button>
      ))}
    </div>
  );
}

export default CountryFilter;
