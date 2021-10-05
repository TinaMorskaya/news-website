import React, { useState, useEffect } from 'react';
import '../App.css';
import { Pointer } from './Pointer';
import { getPaginationArray } from '../features/getPaginationArray';
import { getLink } from '../features/getLink';
import { searchSelector } from '../reducer/searchReducer';
import { useAppSelector } from '../reducer/hooks';

export const Pagination = ({}) => {
  const search = useAppSelector(searchSelector);
  let { target, page, lastPageNum } = search;
  let [pagination, setPagination] = useState<
    {
      name: string | number;
      link: string | null;
    }[]
  >([]);

  useEffect(() => {
    const getNewPagination = () => {
      if (!lastPageNum) {
        return;
      }
      let paginationArray = getPaginationArray(page, lastPageNum);
      let paginationObj = paginationArray.map((el) => {
        let link = getLink(el, page, lastPageNum, target);
        return {
          name: el,
          link: link,
        };
      });
      setPagination(paginationObj);
    };
    getNewPagination();
  }, [target, page, lastPageNum]);

  if (!lastPageNum) return null;
  return (
    <div className="pagination-container">
      {pagination.map(
        (
          page: {
            name: string | number;
            link: string | null;
          },
          i
        ) => (
          <Pointer key={i} name={page.name.toString()} link={page.link} />
        )
      )}
    </div>
  );
};
