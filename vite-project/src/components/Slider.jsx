// src/components/Slider.jsx
import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  const slides = [
    { id: 1, text: "Welcome to Country Explorer" },
    { id: 2, text: "Discover Flags & Regions" },
    { id: 3, text: "Filter by Continent Easily" },
  ];

  return (
    <Carousel>
      {slides.map((s) => (
        <Carousel.Item key={s.id}>
          <div className="d-flex justify-content-center align-items-center vh-30 bg-primary text-white">
            <h2>{s.text}</h2>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
