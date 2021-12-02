import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import { useSelector } from 'react-redux';
import SpinnerLoader from '../Spinner/Spinner';

const PrivateRoute = ({roles, ...routeConfig}) => {

  const {isFetching, data} = useSelector((state) => state.auth);

  if(isFetching) {
    return <SpinnerLoader />
  }

  if(data) {
    if((roles && roles.includes(data.role)) || !roles) {
      return <Route {...routeConfig} />
    }

  }
  return <Redirect to="/" />
}

export default PrivateRoute;
