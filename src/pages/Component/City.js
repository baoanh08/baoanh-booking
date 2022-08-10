import React from "react";
import { CITY } from "../../../data/city";

import "./App.css";

class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = CITY;
  }
  render() {
    const cityRender = CITY.map((city) => {
      return (
        <div className="col-4 ">
          <div style={{ position: "relative", color: "white" }}>
            <img src={city.image} alt="citis"></img>
            <h2 className="namecity">{city.name}</h2>
            <p className="subtextciti">{city.subText}</p>
          </div>
        </div>
      );
    });
    return cityRender;
  }
}

export default City;
