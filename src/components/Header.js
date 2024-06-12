import React, { Component } from "react";
import "./Header.css";
import logo from "../images/logoSansFond.png";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <img className="logo" src={logo} alt="TwiThor Logo" />
          <h1 className="title">TwiThor</h1>
        </div>
        <h3 className="slogan">LET YOUR TWEETS RESONATE LIKE THUNDERS</h3>
      </div>
    );
  }
}
