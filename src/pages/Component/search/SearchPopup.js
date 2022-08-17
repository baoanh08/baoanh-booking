const SearchPopup = () => {
  return (
    <div style={{ backgroundColor: "orange" }}>
      <form>
        <h1>Search</h1>
        <p>Destination</p>
        <label>
          <input
            type="text"
            className="footerinputBox"
            style={{ width: "100%" }}
          />
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
          <div style={{ width: "25%" }}>
            <label>
              <input type="number" style={{ width: "100%" }} />
            </label>
          </div>
        </div>
        <div className="row">
          <div style={{ width: "70%" }}>
            <p>Max price per night</p>
          </div>
          <div style={{ width: "25%" }}>
            <label>
              <input type="number" style={{ width: "100%" }} />
            </label>
          </div>
        </div>
        <div className="row">
          <div style={{ width: "70%" }}>
            <p>Adult</p>
          </div>
          <div style={{ width: "25%" }}>
            <label>
              <input type="number" style={{ width: "100%" }} />
            </label>
          </div>
        </div>
        <div className="row">
          <div style={{ width: "70%" }}>
            <p>Children</p>
          </div>
          <div style={{ width: "25%" }}>
            <label>
              <input type="number" style={{ width: "100%" }} />
            </label>
          </div>
        </div>
        <div className="row">
          <div style={{ width: "70%" }}>
            <p>Room</p>
          </div>
          <div style={{ width: "25%" }}>
            <label>
              <input type="number" style={{ width: "100%" }} />
            </label>
          </div>
        </div>

        <button className="footerbtn" style={{ width: "90%" }}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchPopup;
