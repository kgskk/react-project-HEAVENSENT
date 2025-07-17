import React, { useState, useEffect } from "react";
import './Header.css'
import money from '../media/money@2x.svg'
import energy from '../media/energy.svg'
import people from '../media/Group 1.svg'
import symbol from '../media/image 1.svg'
import credit from '../media/credit.svg'

const Header = () => {
    const [balance, setBalance] = useState([]);
    useEffect(() => {
        fetch("/data.json")
            .then((response) => response.json())
            .then((data) => {
                setBalance(data.Balance);
            })
            .catch((error) => console.error("Error fetching data:", error));

    }, []);
    return (
        <header className="header">
            <div id="consumables">
                <div className="icons1" id="money">
                    <img className="icons" src={money} alt="Money" />
                    <p className="text1">{balance.kazna}</p>
                </div>
                <div className="icons1" id="energy">
                    <img className="icons" src={energy} alt="Energy" />
                    <p className="text1">{balance.energy}</p>
                </div>
            </div>

            <img id="symbol" src={symbol} alt="Symbol" />

            <div id="world">
                <div className="icons2" id="people">
                    <p className="text1">{balance.population}</p>
                    <img className="icons" src={people} alt="People" />
                </div>
                <div className="icons2" id="credit">
                    <p className="text1">{balance.credit}</p>
                    <img className="icons" src={credit} alt="Credit" />
                </div>
            </div>
            
        </header>
    )
}

export default Header;