import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Beers from "./components/Beers";
import NewBeer from "./components/NewBeer";
import RandomBeer from "./components/RandomBeer";
import Navbar from "./components/Navbar";
import BeerDetails from "./components/BeerDetails";
import Home from "./components/Home";
function App() {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    async function getBeers() {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeers(response.data);
    }
    getBeers();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers beers={beers} />} />
        <Route path="/beers/:name" element={<BeerDetails beers={beers} />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route
          path="/new-beer"
          element={<NewBeer beers={beers} setBeers={setBeers} />}
        />
      </Routes>
    </div>
  );
}

export default App;
