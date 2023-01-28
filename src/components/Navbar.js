import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav style={{ backgroundColor: "#32c3ff" }}>
      <ul
        className="ul"
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "space-around",
          margin: "0",
          padding: "0",
          height: "50px",
        }}
      >
        <li style={{ backgroundColor: "#32c3ff" }}>
          <NavLink to="/">🏠</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
