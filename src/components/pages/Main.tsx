import React from 'react';
import '../../App.css';
import { SearchForm } from '../SearchForm';
import { SearchInfo } from '../SearchInfo';
import { NewsContainer } from '../NewsContainer';
import { Pagination } from '../Pagination';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

export const Main = () => (
  <div>
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>NEWS</Navbar.Brand>
        <Nav className="me-auto">
          <Link className="link" to="/profile">
            Profile
          </Link>
          <Link className="link" to="/">
            Log out
          </Link>
        </Nav>
        <SearchForm />
      </Container>
    </Navbar>
    <main>
      <Container>
        <SearchInfo />
        <NewsContainer />
        <Pagination />
      </Container>
    </main>
  </div>
);
