import React from 'react';
import '../../App.css';
import { searchSelector } from '../../reducer/searchReducer';
import { useAppSelector } from '../../reducer/hooks';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import { getFormattedDate } from '../../features/getFarmattedDate';

export const Story = () => {
  const history = useHistory();
  const search = useAppSelector(searchSelector);
  let { id } = useParams<{ id: string }>();
  let articleId = parseInt(id, 10);
  const story = search.articlesBlock[articleId];

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>NEWS</Navbar.Brand>
          <Nav className="me-auto">
            <div className='link' onClick={() => history.goBack()}>Main </div>
            <Link className="link" to="/profile">
              Profile
            </Link>
            <Link className="link" to="/">
              Log out
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <h2 className="mt-5 blog-post-title">{story.title}</h2>
        <p className="blog-post-meta font-italic">
          Published on {getFormattedDate(story.publishedAt)}
          <span>{story.author && ' by ' + story.author}</span>
        </p>
        <Image src={story.urlToImage} fluid />
        <hr />
        <p className="lead">{story.content || story.description}</p>
        <hr />
        <a
          className="blog-post-meta text-black fw-bold"
          href={story.url}
          target="_blank"
        >
          Original
        </a>
      </Container>
    </>
  );
};
