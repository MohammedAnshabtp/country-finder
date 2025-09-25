import React from "react";
// import Card from "react-bootstrap/Card";

function CountryCard({ name, region, flag }) {
  return (
    <div className="px-card">
      <div className="px-card__thumb">
        <img src={flag} alt={`${name} flag`} />
      </div>
      <div className="px-card__body">
        <div className="px-card__title">{name}</div>
        <div className="px-card__subtitle">
          Region: <span className="px-muted">{region}</span>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
