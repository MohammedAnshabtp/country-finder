import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FiTwitter } from "react-icons/fi";
import { SlSocialFacebook, SlSocialLinkedin } from "react-icons/sl";
import { TbBrandYoutube } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import SignInSVG from "../assets/signIn.svg";
import { validateLoginForm } from "../utils/validation";
import { login } from "../features/auth/authSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const submit = (e) => {
    e.preventDefault();
    const errs = validateLoginForm({ email, password });
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      dispatch(login({ email }));
      navigate("/home");
    }
  };

  return (
    <div className="login-page">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col md={6}>
            <h2 className="fw-bold mb-3">Sign In</h2>
            <p>
              New user? <a href="/">Create an account</a>
            </p>
            <Form onSubmit={submit} noValidate>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Username or email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="keepSignedIn">
                <Form.Check type="checkbox" label="Keep me signed in" />
              </Form.Group>

              <Button type="submit" className="w-100 btn-dark">
                Sign In
              </Button>
            </Form>

            <div className="d-flex align-items-center mb-4">
              <div className="flex-grow-1 border-bottom"></div>
              <span className="px-muted">Or Sign In With</span>
              <div className="flex-grow-1 border-bottom"></div>
            </div>

            <div className="d-flex justify-content-center gap-3 mt-2">
              <div className="social-icon-wrapper">
                <SlSocialFacebook />
              </div>
              <div className="social-icon-wrapper">
                <FiTwitter />
              </div>
              <div className="social-icon-wrapper">
                <SlSocialLinkedin />
              </div>
              <div className="social-icon-wrapper">
                <TbBrandYoutube />
              </div>
            </div>
          </Col>

          <Col md={6} className="text-center">
            <img
              src={SignInSVG}
              alt="illustration"
              className="img-fluid w-50 h-50"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
