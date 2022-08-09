import React from "react";
import { TYPE } from "../../../data/type";
import "./App.css";

class Type extends React.Component {
  constructor(props) {
    super(props);
    this.state = TYPE;
  }
  render() {
    const typeRender = TYPE.map((type) => {
      return (
        <div style={{ width: "20%", position: "relative" }} className="col-2">
          <img className="browsimg rounded" src={type.image}></img>

          <div className="diver">
            <h4 className="subhead">{type.name}</h4>
            <p className="bbrowssub">{type.count} hotels</p>
          </div>
        </div>
      );
    });
    return typeRender;
  }
}

export default Type;
