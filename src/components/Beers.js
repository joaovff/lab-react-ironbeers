import { Link } from "react-router-dom";
function Beers(props) {
  return (
    <div style={{marginTop:"50px"}}>
      {props.beers.map((beer) => {
        return (
          <div>
            <Link to={`/beers/${beer.name}`}>
              <img src={beer.image_url} height="150px" />
            </Link>
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Beers;
