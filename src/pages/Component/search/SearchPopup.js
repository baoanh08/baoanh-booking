const SearchPopup = () => {
  return (
    <div>
      <form>
        <h1>Search</h1>
        <p>Destination</p>
        <label>
          <input type="text" />
        </label>
        <p>Check-in Date</p>
        <label>
          <input type="date" />
        </label>
        <p>Option</p>
        <p>Min price per night</p>
        <label>
          <input type="number" />
        </label>
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
