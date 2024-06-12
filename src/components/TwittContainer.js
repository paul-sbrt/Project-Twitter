import React, { Component } from "react";
import Twitt from "./Twitt";
import TwitterAPI from "../API/TwitterAPI";
import "./TwitttContainer.css";

export default class TwittContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      twitts: [],
      // lastTs: 0,
    };
  }
  componentDidMount() {
    this.fetchTwitts();
    this.interval = setInterval(this.fetchTwitts, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  fetchTwitts = () => {
    TwitterAPI.getAllTwitt()
      .then((twitts) => {
        const newTwitts = twitts.filter((twitt) => {
          return !this.state.twitts.find(
            (existingTwitt) => existingTwitt.ts === twitt.ts
          );
        });
        this.setState((prevState) => ({
          twitts: [...prevState.twitts, ...newTwitts],
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    const { twitts } = this.state;
    return (
      <div className="list-message">
        {twitts.map((t, i) => (
          <Twitt key={twitts.id} name={t.name} message={t.message} ts={t.ts} />
        ))}
      </div>
    );
  }
}

// fetchTwitts = () => {
//   const { lastTs } = this.state;

//   TwitterAPI.getAllTwitt()
//     .then((twitts) => {
//       const newTwitts = twitts.filter((twitt) => {
//         return twitt.ts > lastTs;
//       });

//       this.setState((prevState) => ({
//         twitts: [...prevState.twitts, ...newTwitts],
//         lastTs: Math.max(...twitts.map((twitt) => twitt.ts)),
//       }));
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };
