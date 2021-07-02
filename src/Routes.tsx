// eslint-disable-next-line no-use-before-define
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {View} from "./@types/common";
import Layout from "./Layout";
import Configuration from "./views/configuration";
import LiveView from "./views/live-view";

export const VIEWS: View[] = [
  {
    name: "Live View",
    path: "/",
    component: LiveView,
  },
  {
    name: "Configurations",
    path: "/configurations",
    component: Configuration,
  },
  {
    name: "Statistics",
    path: "/stats",
  },
  {
    name: "Find Visitors",
    path: "/find-visitors",
  },
  {
    name: "Personel Management",
    path: "/personel-management",
  },
];

const Routes = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};

export default Routes;
