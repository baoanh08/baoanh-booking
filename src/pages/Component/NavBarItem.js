import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBarItem(props) {
  const renderItem = props.Item.map((item) => {
    return (
      <div>
        <ul className="nav navbar-nav">
          <a href="#" className={item.active ? "active" : ""}>
            <li>
              <i className={item.icon}>{item.type}</i>
            </li>
          </a>
        </ul>
      </div>
    );
  });
  return renderItem;
}
