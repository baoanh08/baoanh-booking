import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBarItem(props) {
  const renderItem = props.Item.map((item) => {
    return (
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a href="#" className={item.active ? "active" : ""}>
            <i className={item.icon}>{item.type}</i>
          </a>
        </li>
      </ul>
    );
  });
  return renderItem;
}
