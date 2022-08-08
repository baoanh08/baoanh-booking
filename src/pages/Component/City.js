import React from "react";
import { CITY } from "../../../data/city";

class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = CITY;
  }
  render() {
    const cityRender = CITY.map((city) => {
      return (
        <div
          className="col-4"
          style={{ backgroundImage: `url(${city.image})` }}
        >
          <h2>{city.name}</h2>
          <p>{city.subText}</p>
        </div>
      );
    });
    return cityRender;
  }
}

export default City;
