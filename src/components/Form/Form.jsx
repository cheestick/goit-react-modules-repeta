import { Component } from "react";
import shortid from "shortid";
import "./Form.css";

const initialState = {
  name: "",
  tag: "",
  experience: "junior",
  license: false,
};

class Form extends Component {
  nameInputId = shortid.generate();
  tagInputId = shortid.generate();

  state = {
    ...initialState,
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

  handleLicenseChange = (event) => {
    this.setState({ license: event.currentTarget.checked });
  };

  reset = () => {
    this.setState(initialState);
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

        <p>Your level of seniority:</p>
        <label>
          Junior
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === "junior"}
          />
        </label>
        <label>
          Middle
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === "middle"}
          />
        </label>
        <label>
          Senior
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experience === "senior"}
          />
        </label>

        <label>
          <input
            type="checkbox"
            name="license"
            checked={this.state.license}
            onChange={this.handleLicenseChange}
          />
          License agreement
        </label>

        <button type="submit">Send</button>
      </form>
    );
  }
}

export default Form;
