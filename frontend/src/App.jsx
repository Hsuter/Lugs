import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProfileCard from "./pages/ProfileCard";
import KenyanNews from "./components/KenyanNews";
import Wards from "./pages/Wards";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";

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
          <Route
            path="/news"
            element={
              <>
                <div className="flex flex-col">
                  <Navbar />
                  <KenyanNews />
                  <Footer />
                </div>
              </>
            }
          />
          <Route
            path="/wards"
            element={
              <>
                <div className="flex flex-col">
                  <Navbar />
                  <Wards />
                  <Footer />
                </div>
              </>
            }
          />
          <Route
            path="/gallery"
            element={
              <>
                <div className="flex flex-col">
                  <Navbar />
                  <Gallery />
                  <Footer />
                </div>
              </>
            }
          />
          <Route
            path="/events"
            element={
              <>
                <div className="flex flex-col">
                  <Navbar />
                  <Events />
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
