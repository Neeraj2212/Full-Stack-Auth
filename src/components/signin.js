/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import styles from "./signup.module.css";

const SignIn = () => {
  return (
    <div className={styles.signin_form}>
      <Form className={styles.form}>
        <Row style={{ margin: `1rem auto` }}>
          <Col sm={12} md={3}>
            <Form.Label>Email</Form.Label>
          </Col>
          <Col sm={12} md={9}>
            <Form.Control type="email" placeholder="Enter email" />
          </Col>
        </Row>

        <Row style={{ margin: `1rem auto` }}>
          <Col sm={12} md={3}>
            <Form.Label>Password</Form.Label>
          </Col>
          <Col sm={12} md={9}>
            <Form.Control type="password" placeholder="Password" />
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
