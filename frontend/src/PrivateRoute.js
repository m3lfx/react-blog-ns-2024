import React from 'react';
import { Navigate } from 'react-router-dom';
import { getUser } from './helpers';

const PrivateRoute = ({  children, redirectTo }) => {
    console.log(children.type.name)
       return getUser() ? children :  <Navigate to={redirectTo} />;
} ;

export default PrivateRoute;