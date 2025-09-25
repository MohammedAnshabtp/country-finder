// src/components/common/CountryCard.jsx
import React from "react";
import Card from "react-bootstrap/Card";

const CountryCard = ({ name, flag, region }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={flag} alt={`${name} flag`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Region: {region}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CountryCard;
