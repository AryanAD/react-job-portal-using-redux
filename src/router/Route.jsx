import React from "react";
import PropTypes from "prop-types";
import { Navigate, Route, Routes } from "react-router";

// Components
import PageNotFound from "../components/PageNotFound/PageNotFound";
import Dashboard from "../components/Dashboard/Dashboard";

// Home Routes
import Home from "../screens/Home/Home";
import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";

// Actual Routes

export const Router = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route
          path="/"
          element={
            <AuthWrapper>
              <Dashboard />
            </AuthWrapper>
          }
        >
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </React.Fragment>
  );
};

const AuthWrapper = ({ children }) => {
  const token = localStorage.getItem("token");

  if (token === null) {
    return <Navigate to="/login" />;
  }
  return token && children;
};

AuthWrapper.propTypes = {
  children: PropTypes.any,
};
