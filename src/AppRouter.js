import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import SideBar from "./components/sidebar/SideBar";
import Manage from "./components/sidebar/Manage";
import CreateRedux from "./crud redux/CreateRedux";
import EditRedux from "./crud redux/EditRedux";
import ViewDetailRedux from "./crud redux/ViewDetailRedux";

const AppRouter = () => {
  return (
    <div className="flex gap-x-3">
      <Routes>
        <Route path="/" element={<SideBar></SideBar>}>
          <Route path="/" element={<App />}></Route>
          <Route path="/details-redux" element={<ViewDetailRedux />}></Route>
          <Route path="/create-redux" element={<CreateRedux />}></Route>
          <Route path="/edit-redux" element={<EditRedux />}></Route>
          <Route path="/manage" element={<Manage />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
