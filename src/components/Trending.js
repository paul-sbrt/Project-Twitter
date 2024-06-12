import React, { Component } from "react";
import "./Trending.css";
import TwitterAPI from "../API/TwitterAPI";

export default class Trending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trends: [],
    };
  }
  componentDidMount() {
    TwitterAPI.getTrend()
      .then((data) => {
        let trends = Object.entries(data);
        trends.sort((a, b) => b[1] - a[1]);
        return trends.slice(0, 16).map((entry) => entry[0]);
      })
      .then((trends) => {
        this.setState({ trends });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    const { trends } = this.state;
    return (
      <div id="tendance">
        <h2 className="title-trend">Tendances</h2>
        <div className="button-wrapper">
          {trends.map((word, i) => (
            <button key={word} className="button">
              {word}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
