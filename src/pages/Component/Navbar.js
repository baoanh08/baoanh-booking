import { Link } from "react-router-dom";
import { NAVBARITEM } from "../../../data/navbar";
import NavBarItem from "./NavBarItem";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import { Styles } from "./module.css";

export default function Navbar(props) {
  const Item = NAVBARITEM;

  return (
    <div style={{ background: "#003580" }} className="container-fluid">
      <div className="row">
        <div className="col-6 col-sm-9">
          <a
            href="#"
            style={{
              textDecoration: "none",
              flexGrow: 1,
              marginBottom: 3,
              color: "white"
            }}
          >
            Booking Website
          </a>
        </div>
        <div className="col-6 col-sm-3">
          <div className="row">
            <div className="col-3 signButton">
              <button>Register</button>
            </div>
            <div className="col-3 signButton">
              <button>Login</button>
            </div>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-expand-sm col-6">
        <div className="container">
          <NavBarItem Item={Item} />{" "}
        </div>
      </nav>
    </div>
  );
}
