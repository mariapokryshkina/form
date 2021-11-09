import React, { Component } from "react";
import Form from "./Form";
import View from "./View";
import Popup from "./Popup";

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    message: "",
    role: "",
    showPopup: false,
  };

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

popupHandler = (e) => {
  e.preventDefault();
  this.setState({ showPopup: true });
}

  render() {
    return (
      <div>
        <Form change={this.inputHandler} submit={this.popupHandler} />
        <View
          first={this.state.firstname}
          last={this.state.lastname}
          phone={this.state.phone}
          role={this.state.role}
          message={this.state.message}
        />

       {this.state.showPopup && <Popup />}
      </div>
    );
  }
}

export default App;
