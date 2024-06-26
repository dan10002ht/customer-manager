import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import defaultRoute from "./defaultRoute";
import PropTypes from "prop-types";
import Page404 from "../pages/Customer/Page404";
import DashboardLayout from "../layout/DashboardLayout";

const Routing = ({ prefix = "" }) => {
  const routeGroups = [
    ...defaultRoute,
    {
      path: "*",
      component: Page404,
    },
  ];
  // empty bracket for layout
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          {routeGroups.map((group, index) => (
            <Route
              key={index}
              path={`${prefix}${group.path}`}
              Component={group.component}
            ></Route>
          ))}
        </Routes>
      </DashboardLayout>
    </Router>
  );
};

Routing.propTypes = {
  prefix: PropTypes.string,
};

export default Routing;
