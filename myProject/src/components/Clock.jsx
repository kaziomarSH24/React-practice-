import React from "react";

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
        <button onClick={() => this.handleClick('en-US')}>Click Here</button>
      </div>
    );
  }
}

export default Clock;
