
import React, { JSX } from 'react';

import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/hooks.ts';
import { selectUser } from '../features/authSlice.ts';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const user = useAppSelector(selectUser); 


  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;