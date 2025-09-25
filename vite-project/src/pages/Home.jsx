import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Card, Spinner, Button } from "react-bootstrap";
import {
  fetchCountries,
  filterByRegion,
} from "../features/countries/countrySlice";
import Slider from "../components/Slider";
import Footer from "./Footer";

function Home() {
  const dispatch = useDispatch();
  const {
    list: countries,
    filtered,
    status,
    error,
  } = useSelector((state) => state.countries);

  const [visible, setVisible] = useState(12);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCountries());
    }
  }, [status, dispatch]);

  const loadMore = () => setVisible((prev) => prev + 6);

  const handleFilter = (region) => {
    setActiveFilter(region);
    dispatch(filterByRegion(region));
    setVisible(12);
  };

  if (status === "loading") {
    return (
      <div className="d-flex align-items-center justify-content-center vh-100">
        <Spinner animation="border" role="status" />
        <span className="ms-2">Loading countries...</span>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="d-flex align-items-center justify-content-center vh-100">
        <p className="text-danger">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-vh-100 d-flex flex-column">
      <div className="bg-white border-bottom">
        <Container className="border-bottom py-3">
          <Row className="align-items-center">
            <Col>
              <h4> Countries</h4>
            </Col>
            <Col className="d-flex justify-content-end">
              <div className="d-flex gap-2">
                {["All", "Asia", "Europe"].map((filter) => (
                  <div
                    key={filter}
                    onClick={() => handleFilter(filter)}
                    className={`pb-2 cursor-pointer ${
                      activeFilter === filter
                        ? "border-bottom border-2 border-dark fw-bold text-dark"
                        : "text-secondary"
                    }`}
                    style={{ userSelect: "none" }}
                  >
                    {filter}
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-5 flex-grow-1">
        {/* Welcome Section */}
        <div className="text-center mb-5">
          <div className="d-flex align-items-center mb-4">
            <div className="flex-grow-1 border-bottom"></div>
            <h1 className="mx-4 fw-bold">WELCOME</h1>
            <div className="flex-grow-1 border-bottom"></div>
          </div>
        </div>

        {/* Slider */}
        <Slider countries={countries} />

        {/* Country Cards */}
        <Row className="g-4">
          {filtered.slice(0, visible).map((country, idx) => (
            <Col md={6} key={idx}>
              <Card className="d-flex flex-row align-items-center p-3 border rounded shadow-sm h-100">
                <div
                  className="d-flex align-items-center justify-content-center border rounded me-3"
                  style={{ width: "60px", height: "40px", overflow: "hidden" }}
                >
                  <img
                    src={country.flag}
                    alt={country.name}
                    className="img-fluid"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div>
                  <Card.Title className="mb-1 fs-6 fw-bold">
                    {country.name}
                  </Card.Title>
                  <Card.Text className="text-muted small">
                    {country.region}
                  </Card.Text>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Load More */}
        {visible < filtered.length && (
          <div className="text-center mt-4">
            <Button variant="dark" onClick={loadMore}>
              Load more
            </Button>
          </div>
        )}
      </Container>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
