import React, { useState, ChangeEvent, SyntheticEvent } from 'react';
import '../App.css';
import { setQueryParams } from '../features/setQueryParams';
import { searchSetup } from '../reducer/searchReducer';
import { useAppDispatch } from '../reducer/hooks';
import { getQueryParams } from '../features/getQueryParams';
export { SearchForm };
import { useLocation, useHistory } from 'react-router-dom';

const SearchForm = () => {
  const history = useHistory();
  let location = useLocation();
  const dispatch = useAppDispatch();

  const [searchTarget, setSerchTarget] = useState(
    () => getQueryParams(location).targetURL
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    setSerchTarget(value);
  };

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    let newState = {
      target: searchTarget,
      page: 1,
    };
    dispatch(searchSetup({ ...newState }));
    setQueryParams(newState, history);
  };

  return (
    <form className="d-flex" onSubmit={handleSubmit}>
      <input
        className="form-control"
        type="search"
        onChange={handleChange}
        placeholder="Search..."
        aria-label="Search"
      />
    </form>
  );
};
