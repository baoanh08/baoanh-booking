import { Link } from "react-router-dom";
import NavBarItem from "./NavBarItem";

export default function Navbar() {
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
      <NavBarItem />
    </div>
  );
}
