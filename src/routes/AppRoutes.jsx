import React from "react";
import Home from "../views/Home/Home";
import Login from "../views/Home/Login";

import { BrowserRouter, Routes, Route} from "react-router-dom";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
