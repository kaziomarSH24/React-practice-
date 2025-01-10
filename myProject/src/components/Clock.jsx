import React from "react";
import Button from "./Button";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      locale: "bn-BD",
    };
  }
  componentDidMount() {
    this.clockTimer = setInterval(() => {
      this.tick();
    });
  }
  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  handleClick = (locale) => {
    this.setState({
      locale: locale,
    });
  };

  render() {
    const { date, locale } = this.state;
    return (
      <div>
        <h1 className="heading">
          <span className="text">
            {this.state.date.toLocaleTimeString(locale)}
          </span>
        </h1>
        {locale === "bn-BD" ? (
          <Button change={this.handleClick} locale="en-US" show={false} />
        ) : (
          <Button change={this.handleClick} locale="bn-BD" show />
        )}
      </div>
    );
  }
}

export default Clock;
