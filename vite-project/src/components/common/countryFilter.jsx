// src/components/common/CountryFilter.jsx
import React from "react";
import { Form } from "react-bootstrap";

const regions = ["All", "Asia", "Europe", "Africa", "Americas", "Oceania"];

const CountryFilter = ({ onFilter }) => {
  return (
    <Form.Select
      className="mb-4"
      onChange={(e) => onFilter(e.target.value)}
      aria-label="Filter by region"
    >
      {regions.map((r) => (
        <option key={r} value={r}>
          {r}
        </option>
      ))}
    </Form.Select>
  );
};

export default CountryFilter;
