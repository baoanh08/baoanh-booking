import { Link } from "react-router-dom";
import { NAVBARITEM } from "../../../data/navbar";
import NavBarItem from "./NavBarItem";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Navbar(props) {
  const Item = NAVBARITEM;

  return (
    <div className="container-fluid">
      <div className="navbar-header">
        <Link to="/" className="navbar-brand">
          Booking Website
        </Link>
      </div>
      <div className="nav navbar-nav navbar-right">
        <button>Register</button>
        <button>Login</button>
      </div>
      <NavBarItem Item={Item} />
    </div>
  );
}
