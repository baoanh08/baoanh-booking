import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

import SearchPopup from "../Component/search/SearchPopup";
import SearchListItem from "../Component/search/SearchListItem";

const Search = () => {
  return (
    <div className="row">
      <div style={{ width: "30%" }}>
        <SearchPopup />
      </div>
      <div style={{ width: "70%" }}>
        <SearchListItem />
      </div>
    </div>
  );
};

export default Search;
