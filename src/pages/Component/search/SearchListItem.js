import { SEARCHLISTITEM } from "../../../../data/search";
import React from "react";

class SearchListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = SEARCHLISTITEM;
  }
  render() {
    const SearchRender = SEARCHLISTITEM.map((item) => {
      return (
        <div>
          <div>
            <img src={item.image_url}></img>
          </div>
          <div>
            <h1>{item.name}</h1>
            <p>{item.distance}</p>
            <p>{item.tag}</p>
            <p>{item.description}</p>
            <p>{item.type}</p>
            <p>{item.free_cancel}</p>
            <div>{item.rate_text} </div>
            <div>{item.rate}</div>
            <div>${item.price}</div>
            <div>
              <p>Inclues taxes and fees</p>
              <button>See Availability</button>
            </div>
          </div>
        </div>
      );
    });
    return SearchRender;
  }
}

export default SearchListItem;
