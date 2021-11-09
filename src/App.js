import React from "react";
import { Routes, Route, BrowserRouter, Link, Outlet } from "react-router-dom";
import {
  Home,
  LogIn,
  Profile,
  Upload,
  DirectMainPage,
  DirectIndividual,
  Explore,
} from "./pages";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="direct/*" element={<DirectMainPage />}>
            <Route path="inbox" element={<DirectMainPage />} />
            <Route path=":id" element={<DirectIndividual />} />
          </Route>
          <Route path="explore/*" element={<Explore />} />
          <Route path="login" element={<LogIn />} />
          <Route path="profile" element={<Profile />} />
          <Route path="upload" element={<Upload />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

const Users = () => {
  return (
    <div>
      <nav>
        <Link to="inbox">Direct Main Page</Link>
      </nav>

      <Outlet />
    </div>
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default App;
