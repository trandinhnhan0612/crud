import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import CreateRedux from "./crud redux/CreateRedux";
import EditRedux from "./crud redux/EditRedux";
import ViewDetailRedux from "./crud redux/ViewDetailRedux";
import ViewDetails from "./crud/ViewDetails";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/create-redux" element={<CreateRedux />}></Route>
        <Route path="/edit-redux" element={<EditRedux />}></Route>
        <Route path="/details-redux" element={<ViewDetailRedux />}></Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
