import React from "react";
import { TYPE } from "../../../data/type";

class Type extends React.Component {
  constructor(props) {
    super(props);
    this.state = TYPE;
  }
  render() {
    const typeRender = TYPE.map((type) => {
      return (
        <div className="col-3">
          <img src={type.image}></img>
          <h2>{type.name}</h2>
          <p>{type.count} hotels</p>
        </div>
      );
    });
    return typeRender;
  }
}

export default Type;
