import { Link } from "react-router-dom";
import { NAVBARITEM } from "../../../data/navbar";
import NavBarItem from "./NavBarItem";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
export default function Navbar(props) {
  const Item = NAVBARITEM;

  return (
    <div className="container-fluid bg-primary text-white">
      <div className="row">
        <div className="col-6 col-sm-9">
          <Link to="/" className="navbar-brand">
            Booking Website
          </Link>
        </div>
        <div className="col-6 col-sm-3">
          <div className="row">
            <div className="col-6">
              <button>Register</button>
            </div>
            <div className="col-6">
              <button>Login</button>
            </div>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-expand-sm bg-dark">
        <div className="container">
          <NavBarItem Item={Item} />{" "}
        </div>
      </nav>
    </div>
  );
}
