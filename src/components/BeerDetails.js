import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

function BeerDetails(props) {
  const [beerDetail, setBeerDetail] = useState(null);
  const { name } = useParams();
  useEffect(() => {
    const beerDetail = props.beers.find((item) => name === item.name);
    setBeerDetail(beerDetail);
  }, [beerDetail]);
  if (!beerDetail) return <p>Beer not found!</p>;
  return (
    <div key={beerDetail._id} style={{ marginTop: "50px" }}>
      <img src={beerDetail.image_url} height="400px" />
      <h3>{beerDetail.name}</h3>
      <p>{beerDetail.tagline}</p>
      <p>{beerDetail.first_brewed}</p>
      <p>{beerDetail.attenuation_level}</p>
      <p>{beerDetail.description}</p>
      <p>{beerDetail.contributed_by}</p>
    </div>
  );
}

export default BeerDetails;
