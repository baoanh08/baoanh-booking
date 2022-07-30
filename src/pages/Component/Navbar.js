import { useState } from "react";
import { Link } from "react-router-dom";
import { NAVBARITEM } from "../../../data/navbar";
import NavBarItem from "./NavBarItem";

export default function Navbar(props) {
  const [Item, setItem] = useState(NAVBARITEM);

  return (
    <div>
      <div>
        <Link to="/">Booking Website</Link>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">
              <button>Register</button>
            </Link>
          </li>
          <li>
            <Link to="/">
              <button>Login</button>
            </Link>
          </li>
        </ul>
      </div>
      <NavBarItem Item={Item} />
    </div>
  );
}
