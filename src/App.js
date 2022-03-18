import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CountriesList from "./components/CountriesList";
import Header from "./components/Header";
import "./App.css";

// import Navbar from "./Navbar";
const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div className="app" data-theme={theme}>
      <Router>
        <Header changeTheme={setTheme} theme={theme} />
        <div className="container">
          <Routes>
            <Route path="/" element={<CountriesList />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
