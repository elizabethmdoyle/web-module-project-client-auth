import React , {Fragment} from "react";
import { Routes, Navigate } from "react-router-dom";



const PrivateRoute = ({ component: Component, children, ...rest }) => {
  // const Component = props.component
  return (
    <Fragment>
    <Routes
      {...rest}
      // exact path=""
      render={(props) => {
         if (localStorage.getItem("token")) {
        //   return <Navigate to="/" />
        // } 
        
        
        // {
        //   // if token is in localstorage, render the given component
          return <Component {...props} />;
        } else {
          return <Navigate to="/login" />;
        }
      }}
    /></Fragment>
  );
};

export default PrivateRoute;