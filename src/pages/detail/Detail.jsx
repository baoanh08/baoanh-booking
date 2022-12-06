import DetailItem from "../Component/detail/DetailItem";
import Navbar from "../Component/Navbar";
import FormDK from "../Component/FormDK";
import Footer from "../Component/Footer";
const Detail = (props) => {
  return (
    <div>
      <Navbar />
      <DetailItem />
      <FormDK />
      <div className="row">
        <Footer />
      </div>
    </div>
  );
};

export default Detail;
