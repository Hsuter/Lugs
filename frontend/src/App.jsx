import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProfileCard from "./pages/ProfileCard";

function App() {
  return (
    <>
      <div className="App flex-1   overflow-x-hidden hide-scrollbar  flex-col-reverse">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="flex flex-col">
                  <Navbar />
                  <Home />
                  <Footer />
                </div>
              </>
            }
          />
          <Route
            path="/staff_profile"
            element={
              <>
                <div className="flex flex-col">
                  <Navbar />
                  <ProfileCard />
                  <Footer />
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
