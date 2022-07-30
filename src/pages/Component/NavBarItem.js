import { Link } from "react-router-dom";

export default function NavBarItem(props) {
  console.log(props);
  const renderItem = props.Item.map((item) => {
    return (
      <div>
        <ul>
          <li className={item.active ? "checked" : ""}>
            <Link to="/" className={item.icon}>
              {item.type}
            </Link>
          </li>
        </ul>
      </div>
    );
  });
  return renderItem;
}
