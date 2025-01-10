import React from "react";

class Form extends React.Component {
  state = {
    title: "javascript",
  };
  handelChange = (e) => {
    console.log(e.target.value);
    
    this.setState({
      title: e.target.value,
    });
    
  };
  render() {
    const { title } = this.state;
    return (
      <div>
        <form>
          <input
            type="text"
            value={title}
            placeholder="Enter title"
            onChange={this.handelChange}
          />
        </form>
        <p>{title}</p>
      </div>
    );
  }
}

export default Form;
