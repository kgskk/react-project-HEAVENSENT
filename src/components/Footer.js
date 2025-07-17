import React, { useState, useEffect } from "react";
import './Footer.css';
import homeIcon from '../media/home.svg'
import importIcon from '../media/import.svg'
import exportIcon from '../media/export.svg'
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Import from './Import'

const Footer = () => {
    return (
        

        <footer className="footer">
            <div className="navbar">
                
                <NavLink 
                to="/export"
                className={({ isActive }) => isActive ? 'export active' : 'export'}
                >
                    <div className="export">
                    <Link to={`/export`} className="link-nav">
                         <img src={exportIcon} alt="Export" id="export" />
                    </Link>
                </div>
                </NavLink>
                <NavLink
                to="/"
                className={({ isActive }) => isActive ? 'home active' : 'home'}
                >
                    <div className="home">
                    <Link to={`/`} className="link-nav">
                          <img src={homeIcon} alt="Home" id="home" />
                    </Link>
                       
                </div>
                </NavLink>
                
                <NavLink
                to="/Import"
                className={({ isActive }) => isActive ? 'import active' : 'import'}
                >
                    <div className="import">
                    <Link to={`/Import`} className="link-nav" >
                          <img src={importIcon} alt="Import" id="import" />
                    </Link>
                </div>

                </NavLink>
                
            </div>
        </footer>

    )
}

export default Footer;