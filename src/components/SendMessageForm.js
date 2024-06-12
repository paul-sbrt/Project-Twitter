import React, { Component } from "react";
import "./SendMessageForm.css";
import TwitterAPI from "../API/TwitterAPI";

export default class SendMessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pseudo: "",
      message: "",
    };
  }

  TwittSubmit = (event) => {
    event.preventDefault();
    const { pseudo, message } = this.state;

    TwitterAPI.sendTwitt(pseudo, message)
      .then((data) => {
        alert("Tweet envoyé avec succès:");
        this.setState({ pseudo: "", message: "" });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  twittInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { pseudo, message } = this.state;
    return (
      <div className="container">
        <div className="form">
          <form action="" id="form-twit" onSubmit={this.TwittSubmit}>
            <input
              type="text"
              placeholder="Pseudo"
              name="pseudo"
              id="pseudo"
              maxLength={16}
              value={pseudo}
              onChange={this.twittInputChange}
            />
            <textarea
              name="message"
              id="message"
              maxLength={256}
              placeholder="Votre message"
              value={message}
              onChange={this.twittInputChange}
            />
            <button className="submit">TwiThorer</button>
          </form>
        </div>
      </div>
    );
  }
}
