import axios from "axios";
import { useState, useEffect } from "react";
function RandomBeer() {
  const [random, setRandom] = useState([]);
  useEffect(() => {
    async function getApi() {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      setRandom(response.data);
    }
    getApi();
  }, []);
  return (
    <div key={random._id} style={{marginTop:"50px"}}>
      <img src={random.image_url} height="400px" />
      <h3>{random.name}</h3>
      <p>{random.tagline}</p>
      <p>{random.first_brewed}</p>
      <p>{random.attenuation_level}</p>
      <p>{random.description}</p>
      <p>{random.contributed_by}</p>
    </div>
  );
}

export default RandomBeer;
