import { SEARCHLISTITEM } from "../../../../data/search";
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
  border-radius: 5px 5px 5px 5px;
`;
const E = styled.p`
  font-size: 14px;
  color: #262626;
  font-weight: 500;
  line-height: 1;
`;

class SearchListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = SEARCHLISTITEM;
  }
  render() {
    const SearchRender = SEARCHLISTITEM.map((item) => {
      return (
        <div>
          <div className="row">
            <div className="hotle" style={{ width: "30%" }}>
              <img src={item.image_url}></img>
            </div>
            <div style={{ width: "70%" }}>
              <div className="row">
                <div style={{ width: "65%" }}>
                  <strong>
                    <h4 style={{ color: "rgb(0, 158, 220)" }}>{item.name}</h4>
                  </strong>
                </div>

                <div style={{ width: "20%" }}>
                  <strong>{item.rate_text} </strong>
                </div>
                <Rate style={{ width: "10%" }}>{item.rate}</Rate>
              </div>

              <p>{item.distance} from center</p>
              <Rate>{item.tag}</Rate>
              <p>
                <strong>{item.description}</strong>
              </p>
              <div className="row">
                <div style={{ width: "70%" }}>
                  <p>{item.type}</p>

                  {item.free_cancel ? (
                    <p>
                      Freecancell <br />
                      You can cancell later, so look in this great today!
                    </p>
                  ) : (
                    <p></p>
                  )}
                </div>

                <div style={{ width: "30%" }}>
                  <h1>${item.price}</h1>
                  <p>Inclues taxes and fees</p>
                  <Rate>See Availability</Rate>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return SearchRender;
  }
}

export default SearchListItem;
