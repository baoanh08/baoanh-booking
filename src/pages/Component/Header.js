import { Link } from "react-router-dom";

function handleSubmit(e) {
  e.preventDefault();
  window.location.replace("/search");
}
export default function Header() {
  return (
    <div>
      <h1>A Lifetime of discounts? It's Genius</h1>
      <p>
        Get rewarded for your travels-unclock instant saving of 10% or more with
        a free acount
      </p>
      <div>
        <buton>
          <Link to="/">Sign in/Register</Link>
        </buton>
      </div>
      <div>
        <form>
          <label>
            <input type="text" placeholder="Where are you going" />
          </label>
          <label>
            <input type="text" placeholder="Check-in - Check-out" />
          </label>
          <label>
            <input type="text" placeholder="2 adults 0children 1room" />
          </label>
          <button onClick={handleSubmit}>Search</button>
        </form>
      </div>
    </div>
  );
}
