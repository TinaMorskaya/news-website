import React from 'react';
import '../App.css';
import { searchSelector } from '../reducer/searchReducer';
import { useAppSelector } from '../reducer/hooks';
export { SearchInfo };

const SearchInfo = () => {
  const search = useAppSelector(searchSelector);
  return (
    <div className="first-main-flex flex-sample">
      {search.totalCount === null ? (
        <h5>Please, wait for search results ☕</h5>
      ) : (
        <>
          <h5>Articles</h5>
          <h5>{search.totalCount.toLocaleString()} results</h5>
        </>
      )}
    </div>
  );
};
