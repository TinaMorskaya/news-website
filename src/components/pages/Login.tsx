import React, { useState, useEffect, SyntheticEvent } from 'react';
import '../../App.css';
import { login } from '../../reducer/usersReducer';
import { useAppDispatch } from '../../reducer/hooks';
import { useHistory } from 'react-router-dom';
import { Form, Button, Nav } from 'react-bootstrap';

export const Login = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(login({ email: email, token: token }));
    history.replace('/main');
  };

  useEffect(() => {
    const logOut = () => {
      dispatch(login({ email: '', token: '' }));
    };
    logOut();
  }, []);

  return (
    <div className="settings-wrapper">
      <form onSubmit={handleSubmit} className="settings-page">
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>API token</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter API token"
            onChange={(event) => setToken(event.target.value)}
            value={token}
          />
        </Form.Group>
        <Nav.Link
          id="link-token"
          href="https://newsapi.org/register"
          target="_blank"
        >
          You can get API token here
        </Nav.Link>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
