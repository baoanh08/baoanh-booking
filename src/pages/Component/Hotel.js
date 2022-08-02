import React from "react";
import { HOTEL } from "../../../data/hotel_list";

class Hotel extends React.Component {
  constructor(props) {
    super(props);
    this.state = HOTEL;
  }
  render() {
    const hotelRender = HOTEL.map((hotel) => {
      return (
        <div>
          <img src={hotel.image_url}></img>
          <h1>{hotel.name}</h1>
          <p>{hotel.city}</p>
          <p>Starting From ${hotel.price}</p>
          <p>
            {hotel.rate} {hotel.type}
          </p>
        </div>
      );
    });
    return hotelRender;
  }
}

export default Hotel;
