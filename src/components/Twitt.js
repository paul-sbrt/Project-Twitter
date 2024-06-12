import React, { Component } from "react";
import "./Twitt.css";
import imageBackground from "../images/hammerHammer.png";
import imageManche from "../images/hammerHandle.png";
import imagePommeau from "../images/hammerPommeau.png";

export default class Twitt extends Component {
  render() {
    const { message, name, ts } = this.props;
    const date = new Date(ts);
    const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    return (
      <div className="container1">
        <div
          className="message-card"
          style={{ backgroundImage: `url(${imageBackground})` }}
        >
          <div className="message-content">
            <h3>{name}</h3>
            {/* <button>like</button> */}
            <p className="message">{message}</p>
            <p className="date">{formattedDate}</p>
          </div>
        </div>
        <div
          className="manche"
          style={{ backgroundImage: `url(${imageManche})` }}
        ></div>
        <div
          className="pommeau"
          style={{ backgroundImage: `url(${imagePommeau})` }}
        ></div>
      </div>
    );
  }
}
