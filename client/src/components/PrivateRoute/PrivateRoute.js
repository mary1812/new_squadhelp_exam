import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import SpinnerLoader from "../Spinner/Spinner";
import CONSTANTS from "../../constants";

const PrivateRoute = ({ roles, ...routeConfig }) => {
  const { data } = useSelector((state) => state.auth);
  
  return (roles && data && roles.includes(data.role)) || !roles ? (
    <Route {...routeConfig} />
  ) : window.localStorage.getItem(CONSTANTS.REFRESH_TOKEN) && !data ? (
     <SpinnerLoader />
  ) : (
    <Redirect to="/" />
  );
};

export default PrivateRoute;
