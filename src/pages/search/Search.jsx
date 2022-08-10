import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

import SearchPopup from "../Component/search/SearchPopup";
import SearchListItem from "../Component/search/SearchListItem";

const Search = () => {
  return (
    <div className="row">
      <SearchPopup />
      <SearchListItem />
    </div>
  );
};

export default Search;
