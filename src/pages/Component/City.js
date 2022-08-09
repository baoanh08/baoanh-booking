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
        <div className="col-4 citythree">
          <div className="manchester">
            <img scr="./images/city_2.webp" alt="citis"></img>
            console.log({city.image});
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
