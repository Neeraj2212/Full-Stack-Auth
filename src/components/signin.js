/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Form, Button, Col, Row, Alert } from "react-bootstrap";
import styles from "./signup.module.css";
import { signIN } from "./../firebase";

const SignIn = () => {
  const [error, setError] = useState("");
  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signIN(userData.email, userData.password);
    if (res.user) {
      console.log("Sign IN Successfull");
    } else {
      setError(res);
    }
  };

  return (
    <div className={styles.signup_form}>
      <Form className={styles.form} onSubmit={handleSubmit}>
        {error && (
          <Row>
            <Alert variant="danger">{error}</Alert>
          </Row>
        )}
        <Row style={{ margin: `1rem auto` }}>
          <Col sm={12} md={3}>
            <Form.Label>Email</Form.Label>
          </Col>
          <Col sm={12} md={9}>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
          </Col>
        </Row>

        <Row style={{ margin: `1rem auto` }}>
          <Col sm={12} md={3}>
            <Form.Label>Password</Form.Label>
          </Col>
          <Col sm={12} md={9}>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row style={{ margin: `1rem auto` }}>
          <Col xs={4} sm={4}>
            <Button variant="primary" type="submit">
              Sign In
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SignIn;
