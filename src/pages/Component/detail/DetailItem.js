import { DETAIL } from "../../../../data/detail";
import React from "react";
import "../App.css";
import styled from "styled-components";
const Rate = styled.p`
  padding: 5px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  background: #003580;
  color: #fff;
  border-radius: 5.09091px 5.09091px 5.09091px 0;
`;
class DetailItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = DETAIL;
  }
  render() {
    const photo = DETAIL.photos.map((i) => (
      <div className="col-4 hotle">
        <img src={i}></img>
      </div>
    ));
    return (
      <div className="row">
        <div className="col-9">
          <h1>
            <strong>{DETAIL.name}</strong>
          </h1>
          <p>{DETAIL.address}</p>
        </div>
        <div className="col-3" style={{ margin: "auto", width: "auto" }}>
          <Rate>Reserve or Book Now</Rate>
        </div>
        <div>
          <p>{DETAIL.distance}</p>
          <p>{DETAIL.price}</p>
        </div>
        <div className="row">{photo}</div>
        <div className="row">
          <div className="col-9">
            <h1>
              <strong>{DETAIL.title}</strong>
            </h1>
            <p>{DETAIL.description}</p>
          </div>
          <div className="col-3">
            <h1>Perfect for a 9-nights day!</h1>
            <h1>{DETAIL.nine_night_price} (9 nights)</h1>
            <Rate>Reserve or Book Now</Rate>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailItem;
