const SearchPopup = () => {
  return (
    <div style={{ backgroundColor: "orange" }}>
      <form>
        <h1>Search</h1>
        <p>Destination</p>
        <label>
          <input type="text" className="footerinputBox" />
        </label>
        <p>Check-in Date</p>
        <label>
          <input type="date" className="footerinputBox" />
        </label>
        <p>Option</p>
        <div className="row">
          <div style={{ width: "70%" }}>
            <p>Min price per night</p>
          </div>
          <div style={{ width: "30%" }}>
            <label>
              <input type="number" style={{ width: "100%" }} />
            </label>
          </div>
        </div>
        <p>Max price per night</p>
        <label>
          <input type="number" />
        </label>
        <p>Adult</p>
        <label>
          <input type="number" />
        </label>
        <p>Children</p>
        <label>
          <input type="number" />
        </label>
        <p>Room</p>
        <label>
          <input type="number" />
        </label>
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchPopup;
