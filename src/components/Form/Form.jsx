import { Component } from "react";
import shortid from "shortid";

class Form extends Component {
  nameInputId = shortid.generate();
  tagInputId = shortid.generate();

  state = {
    name: "",
    tag: "",
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: "", tag: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} autoComplete="off">
        <label htmlFor={this.nameInputId}>
          Name
          <input
            id={this.nameInputId}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor={this.tagInputId}>
          Nickname
          <input
            id={this.tagInputId}
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Send</button>
      </form>
    );
  }
}

export default Form;
