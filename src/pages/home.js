import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Footer from "../components/Footer";
import Header from "../components/header";
import Regions from "../components/Regions";

const App = () => {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setRegions(data.Regions);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        
        <main className="content">
          <Routes>
            <Route
              path="/"
              element={regions.map((region, index) => (
                <Link
                  to={`/region/${region.name}`}
                  className="regions"
                  id={`region${index + 1}`}
                  key={index}
                >
                  <div className="text-r">{region.name} область</div>
                </Link>
              ))}
            />
            <Route path="/region/:name" element={<Regions regions={regions} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;