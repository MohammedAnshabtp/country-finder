import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Slider = ({ countries }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % countries.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + countries.length) % countries.length);
  };

  return (
    <Row className="mb-5">
      {/* Main Slide */}
      <Col md={8} className="position-relative">
        <div className="border rounded overflow-hidden position-relative">
          {countries.length > 0 && (
            <Card.Img
              src={countries[current].flag}
              alt={countries[current].name}
              className="w-100"
              style={{ height: "400px", objectFit: "cover" }}
            />
          )}

          {/* Dots + Arrows Overlay */}
          <div
            className="position-absolute bottom-0 start-50 translate-middle-x mb-3 d-flex align-items-center gap-3"
            style={{ zIndex: 2 }}
          >
            {/* Prev Arrow */}
            <div
              onClick={prevSlide}
              style={{ cursor: "pointer" }}
              className="text-dark fs-4"
            >
              <ArrowLeft />
            </div>

            {/* Dots */}
            <div className="d-flex gap-2">
              {countries.slice(0, 3).map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`rounded-circle ${
                    idx === current % 3 ? "bg-dark" : "bg-light"
                  }`}
                  style={{
                    width: "10px",
                    height: "10px",
                    cursor: "pointer",
                    border: "1px solid #000",
                  }}
                />
              ))}
            </div>

            {/* Next Arrow */}
            <div
              onClick={nextSlide}
              style={{ cursor: "pointer" }}
              className="text-dark fs-4"
            >
              <ArrowRight />
            </div>
          </div>
        </div>
      </Col>

      {/* Side Slide */}
      <Col md={4}>
        {countries.length > 1 && (
          <Card className="border rounded">
            <Card.Img
              src={countries[(current + 1) % countries.length].flag}
              alt={countries[(current + 1) % countries.length].name}
              style={{ height: "400px", objectFit: "cover" }}
            />
          </Card>
        )}
      </Col>
    </Row>
  );
};

export default Slider;
