import React, { useState, useEffect } from 'react';
import '../App.css';
import {
  searchSetup,
  paginationSetup,
  searchSelector,
} from '../reducer/searchReducer';
import { useAppSelector, useAppDispatch } from '../reducer/hooks';
import { getListNews, Element } from '../features/fetchData';
import { userSelector } from '../reducer/usersReducer';
import { getURL } from '../features/getURL';
import { NewsEntry } from './NewsEntry';
export { NewsContainer };
import { useLocation } from 'react-router-dom';
import { getQueryParams } from '../features/getQueryParams';
import { Row } from 'react-bootstrap';

const NewsContainer = ({}) => {
  let location = useLocation();
  const { target, page, lastPageNum, totalCount, articlesBlock } =
    useAppSelector(searchSelector);
  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelector);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      let results = await getListNews(getURL(target, page), user.token);
      dispatch(
        paginationSetup({
          lastPageNum: results?.lastPageNum,
          totalCount: results?.totalCount,
          articlesBlock: results?.articlesBlock,
        })
      );
      setIsLoading(false);
    };
    fetchData();
  }, [target, page]);

  useEffect(() => {
    const updateStateFromURL = () => {
      let { targetURL, pageURL } = getQueryParams(location);
      if (target !== targetURL || page !== pageURL) {
        dispatch(
          searchSetup({
            target: targetURL,
            page: pageURL,
          })
        );
      }
    };
    updateStateFromURL();
  }, [location]);

  return (
    <Row xs={1} md={2} className="g-4">
      {isLoading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        articlesBlock &&
        articlesBlock.map((repo: Element, id: number) => (
          <NewsEntry
            key={repo.title}
            id={id}
            title={repo.title}
            description={repo.description}
          />
        ))
      )}
    </Row>
  );
};
