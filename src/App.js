import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "../src/pages/Layout";
import AboutUs from "./pages/AboutUs.js";
import Gallery from "./pages/Gallery.js";
import Packages from "./pages/Packages.js";
import Shop from "./pages/shop.js";
import Contactpage from "./pages/Contactpage.js";
import Home from "./pages/home.js";
import LoginPage from "./pages/Login/LoginPage.js";
import Clients from "./pages/Clients.js";
import Facilities from "./pages/Facilities.js";
import ShowOnMap from "./pages/ShowOnMap.js";
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from "react";

function App() {
    const [isLogin, setIsLogin] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
      <Route path="admin" element={<LoginPage checkLogin={setIsLogin}/>} />
      <Route path="Clients"  element={<Clients isLogin={isLogin}/>} />

      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contactpage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="facilities" element={<Facilities />} />
        <Route path="showonmap" element={<ShowOnMap />} />
        <Route path="packages" element={<Packages />} />
        <Route path="*" element={<Home />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );

  }
export default App;
