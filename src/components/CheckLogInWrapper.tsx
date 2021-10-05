import React, { FC } from 'react';
import '../App.css';
import { userSelector } from '../reducer/usersReducer';
import { useAppSelector } from '../reducer/hooks';
import { Redirect } from 'react-router-dom';

export const CheckLoginWrapper: FC = ({ children }) => {
  const user = useAppSelector(userSelector);
  return (
    <>
      {!user.email || !user.token ? (
        <Redirect to="/" />
      ) : (
        React.Children.map(children, (child) => (
          <React.Fragment>{child}</React.Fragment>
        ))
      )}
    </>
  );
};
