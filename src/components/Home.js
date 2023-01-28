import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <img src="/beers.png" style={{ height: "50vh", width: "80vw" }} />
        <h3><Link to="/beers">All Beers</Link></h3>
        <p>Check all the beers.</p>
      </div>

      <div>
        <img src="/random-beer.png" style={{ height: "50vh", width: "80vw", margin: "25px 0px 25px" }} />
        <h3><Link to="/random-beer">Random Beer</Link></h3>
        <p>Get a random beer.</p>
      </div>

      <div>
        <img src="/new-beer.png" style={{ height: "50vh", width: "80vw" }} />
        <h3><Link to="new-beer">New Beer</Link></h3>
        <p>Create a new beer.</p>
      </div>
    </div>
  );
}

export default Home;
