import React from "react";
import Clock from "./Clock";
import "./App.css";

const App = () => {
  const cities = [
    { city: "Manama (Bahrain)", timezone: "Asia/Bahrain" },
    { city: "New York (USA)", timezone: "America/New_York" },
    { city: "London (UK)", timezone: "Europe/London" },
    { city: "Tokyo (Japan)", timezone: "Asia/Tokyo" },
    { city: "Sydney (Australia)", timezone: "Australia/Sydney" },
  ];

  return (
    <div className="app">
      <header>
        <h1>World Clock</h1>
        <p>Tracking time across the globe with a focus on Bahrain.</p>
      </header>
      <main>
        <div className="clocks">
          {cities.map((cityData, index) => (
            <Clock key={index} city={cityData.city} timezone={cityData.timezone} />
          ))}
        </div>
      </main>
      <footer>
        <p>Made by Ali Zahed Ali Jassim Rabia</p>
      </footer>
    </div>
  );
};

export default App;
