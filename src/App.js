import React, { Component } from "react";
import Form from "./Form";
import Header from "./Header";
import Footer from "./Footer";
import View from "./View";
import Popup from "./Popup";
import Notes from "./Notes";
import axios from "axios";

class App extends Component {
  state = {
    inputData: {
    firstname: "",
    lastname: "",
    phonenumber: "",
    message: "",
    role: "",
    },
    showPopup: false,
    data: [],
  };

  componentDidMount() {
    axios.get("http://localhost:3001/notes").then((res) => {
      this.setState({ data: res.data });
      console.log(this.state.data);
    });
  }

  inputHandler = (e) => {
    this.setState({
      inputData:{...this.state.inputData,[e.target.name]: e.target.value },  
    });
  };

  popupHandler = (event) => {
    event.preventDefault();
    this.setState({ showPopup: true });
  };

  postHandler=() => {
    axios
    .post("http://localhost:3001/notes", this.state.inputData) 
    .then((res) => {
    console.log(res); 
    this.setState({showPopup: false});
    window.location.reload();
  })
    .catch((error) => console.log(error));
  };

  render() {
  return (
      <div>
        <Header />
        <div className="form_area">
          <Form change={this.inputHandler} submit={this.popupHandler} />
          <View {...this.state.inputData} />
          <div className="notes">
        {this.state.data.map((note) => (
          <Notes {...note} key={note.id} />
        ))}
        </div>
        </div>
        {this.state.showPopup && (
        <Popup {...this.state.inputData}  post={this.postHandler} />
  )}
        <Footer />
      </div>
    );
  }
}

export default App;