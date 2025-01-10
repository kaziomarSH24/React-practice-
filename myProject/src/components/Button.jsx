import React from "react";


class Button extends React.Component {

  render() {
    const { change, locale, show } = this.props;
    return (
        <>
      <button type="button" onClick={() => change(locale)}>
        Click Here
      </button>
      {show && <p>hello</p>}
      </>
    );
  }
}
export default Button;

