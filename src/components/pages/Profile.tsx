import React, { useState, ChangeEvent } from 'react';
import '../../App.css';
import { updateProfile, userSelector } from '../../reducer/usersReducer';
import { useAppSelector, useAppDispatch } from '../../reducer/hooks';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Profile = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelector);
  const [email, setEmail] = useState(user.email);
  const [token, setToken] = useState(user.token);
  const [name, setName] = useState(user.name);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(updateProfile({ email: email, token: token, name: name }));
  };

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>NEWS</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="link" to="/main">
              Main
            </Link>
            <Link className="link" to="/">
              Log out
            </Link>
          </Nav>
        </Container>
      </Navbar>

      <form onSubmit={handleSubmit} className="settings-page border-0 mt-5">
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Your name</Form.Label>
          <Form.Control
            type="text"
            onChange={(event) => setName(event.target.value)}
            value={name}
            placeholder="Enter name"
          />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Your email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Your API token</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter API token"
            onChange={(event) => setToken(event.target.value)}
            value={token}
          />
        </Form.Group>

        <Nav.Link
          id="link-token-profile"
          href="https://newsapi.org/register"
          target="_blank"
        >
          You can get API token here
        </Nav.Link>
        <Button onSubmit={handleSubmit} variant="primary" disabled={!token || !email} type="submit">
          Save
        </Button>
      </form>
    </>
  );
};
