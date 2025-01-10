import React from "react";

class Form extends React.Component {
  state = {
    title: "javascript",
    text: "javascript is awesome",
    library: "react",
    isAwesome: true,
    print: "",
  };
  handelChange = (e) => {
    console.log(e.target.value);

    if (e.target.type === "text") {
      this.setState({ title: e.target.value });
    } else if (e.target.type === "textarea") {
      this.setState({ text: e.target.value });
    } else if (e.target.type === "select-one") {
      this.setState({ library: e.target.value });
    } else if (e.target.type === "checkbox") {
      this.setState({ isAwesome: e.target.checked });
    } else {
      console.log("nothing");
    }
  };

  submitForm = (e) => {
    e.preventDefault();
    const { title, text, library, isAwesome } = this.state;
    console.log(title, text, library, isAwesome);
    this.setState({
        print: `Title: ${title}, Text: ${text}, Library: ${library}, isAwesome: ${isAwesome}`,
        });
  };

  render() {
    const { title, text, library, isAwesome, print } = this.state;
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input
            type="text"
            value={title}
            placeholder="Enter title"
            onChange={this.handelChange}
          />
          <br />
          <br />
          <textarea
            name="text"
            value={text}
            onChange={this.handelChange}
          ></textarea>
          <br />
          <br />
          <select value={library} onChange={this.handelChange}>
            <option value="javascript">Javascript</option>
            <option value="python">Python</option>
            <option value="react">React</option>
            <option value="ruby">Ruby</option>
          </select>
          <br />
          <br />
          <input
            type="checkbox"
            checked={isAwesome}
            onChange={this.handelChange}
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>{print}</p>
      </div>
    );
  }
}

export default Form;
