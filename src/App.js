import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountriesList from "./pages/CountriesList";
import CountryDetails from "./pages/CountryDetails";
import Header from "./components/Header";
import "./app.css";

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div className="app" data-theme={theme}>
      <Router>
        <Header changeTheme={setTheme} theme={theme} />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<CountriesList />} />
            <Route path="/country/:name" element={<CountryDetails />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
