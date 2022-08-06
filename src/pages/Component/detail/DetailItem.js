import { DETAIL } from "../../../../data/detail";
import React from "react";

class DetailItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = DETAIL;
  }
  render() {
    const photo = DETAIL.photos.map((i) => <img src={i}></img>);
    return (
      <div>
        <div>
          <h1>{DETAIL.name}</h1>
          <p>{DETAIL.addess}</p>
          <p>{DETAIL.distance}</p>
          <p>{DETAIL.price}</p>
        </div>
        <div>
          <button>Reserve or Book Now</button>
        </div>
        <div>{photo}</div>
        <div>
          <h1>{DETAIL.title}</h1>
          <p>{DETAIL.description}</p>
        </div>
        <div>
          <h1>Perfect for a 9-nights day!</h1>
          <h1>{DETAIL.nine_night_price} (9 nights)</h1>
          <button>Reserve or Book Now</button>
        </div>
      </div>
    );
  }
}

export default DetailItem;
