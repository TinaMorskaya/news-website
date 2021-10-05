import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Card, Button, Col } from 'react-bootstrap';

export const NewsEntry = ({
  title,
  description,
  id,
}: {
  title: string;
  description: string;
  id: number;
}) => {
  const link = `/story/${id}`;
  return (
    <Col id="column">
      <Card bg="light" className="g-4 border rounded overflow-hidden shadow-sm">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link to={link}>
            {' '}
            <Button variant="primary">Read more</Button>{' '}
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};
