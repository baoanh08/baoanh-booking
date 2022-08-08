import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBarItem(props) {
  const renderItem = props.Item.map((item) => {
    return (
      <ul className="navbar-nav ">
        <li style={{ marginTop: -10, marginLeft: -15 }} className="nav-item">
          <a href="#" className={item.active ? "active" : ""}>
            <i
              style={{
                color: "white",
                alignSelf: "left",
                borderRadius: 20,
                height: 35
              }}
              className={item.icon}
            >
              {item.type}
            </i>
          </a>
        </li>
      </ul>
    );
  });
  return renderItem;
}
