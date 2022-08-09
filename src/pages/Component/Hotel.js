import React from "react";
import { HOTEL } from "../../../data/hotel_list";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
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
const E = styled.p`
  font-size: 14px;
  color: #262626;
  font-weight: 500;
  line-height: 1;
`;
const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;
class Hotel extends React.Component {
  constructor(props) {
    super(props);
    this.state = HOTEL;
  }
  render() {
    const hotelRender = HOTEL.map((hotel) => {
      return (
        <div style={{ width: "25%" }}>
          <div className="hotle">
            <img src={hotel.image_url}></img>
          </div>
          <div>
            <h4>
              <a href="#">{hotel.name}</a>
            </h4>
            <p className="hotleCity">{hotel.city}</p>
            <p className="hotlePrice">Starting From ${hotel.price}</p>
            <FlexDiv>
              <Rate>{hotel.rate}</Rate>
              <E>{hotel.type}</E>
            </FlexDiv>
          </div>
        </div>
      );
    });
    return hotelRender;
  }
}

export default Hotel;
