import React from "react";
import { CITY } from "../../../data/city";

import { Styles } from "./module.css";

class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = CITY;
  }
  render() {
    const cityRender = CITY.map((city) => {
      return (
        <div className="Styles.citythree col-4">
          <div className="Styles.manchester">
            <img scr={city.image}></img>
            <h2>{city.name}</h2>
            <p>{city.subText}</p>
          </div>
        </div>
      );
    });
    return cityRender;
  }
}

export default City;
