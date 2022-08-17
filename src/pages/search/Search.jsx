import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

import SearchPopup from "../Component/search/SearchPopup";
import SearchListItem from "../Component/search/SearchListItem";
import { FOOTER } from "../../../data/footer";

const Search = () => {
  return (
    <div>
      <Navbar />
      <div className="row" style={{ marginTop: "50px" }}>
        <div style={{ width: "20%" }}>
          <SearchPopup />
        </div>
        <div style={{ width: "80%" }}>
          <SearchListItem />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
