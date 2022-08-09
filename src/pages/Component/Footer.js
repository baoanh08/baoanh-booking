import React from "react";
import { FOOTER } from "../../../data/footer";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = FOOTER;
  }
  render() {
    const footerRender = FOOTER.map((col) => {
      // return col.col_values.map((val) => {
      return (
        <div style={{ width: "20%" }} className="footercol">
          <a className="footerlink" href="#">
            {col.col_values}
          </a>
        </div>
      );
      // });
    });
    return footerRender;
  }
}

export default Footer;
