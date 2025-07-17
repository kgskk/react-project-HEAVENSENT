import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/header";
import Regions from "./components/Regions";
import Import from "./components/Import";
import Export from "./components/Export";





const RegionList = ({ regions }) => {
  return (
    <>
      {regions.map((region, index) => (
        <Link
          to={`/region/${region.name}`}
          className="regions"
          id={`region${index + 1}`}
          key={index}
        >
          <div className="text-r">{region.name} область</div>
        </Link>
      ))}
    </>
  );
};



const App = () => {
  const [regions, setRegions] = useState([]);
  const [Import_p, setImport] = useState([]);
  const [Export_p, setExport] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setRegions(data.Regions);
        setImport(data.ImportPage);
        setExport(data.ExportPage)
      })

      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const isRegionListPage = location.pathname === "/";

  return (
    <div className="container">
      <Header />
      <main className={`content ${isRegionListPage ? 'with-margin' : ''}`}>
        <Routes>
          <Route
            path="/"
            element={<RegionList regions={regions} />}
          />
          <Route
            path="/Import"
            element={<Import imp={Import_p} />}
          />
          <Route
          path="/Export"
          element={<Export exp={Export_p} />}
          />
          <Route path="/region/:name" element={<Regions regions={regions} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};


const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Root;
