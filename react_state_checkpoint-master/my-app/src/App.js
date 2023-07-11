import React from "react";
import "react-responsive-modal/styles.css";
import "./App.css";

import { Modal } from "react-responsive-modal";
// import ProfilPhoto from "./image/profilPhoto.jpg";
import Profil from "./Components/Profile/Profil";

class App extends React.Component {
  state = {
    Person: {
      fullName: "Ayoko Tolu",
      bio:
        "I am a Full Stack Developer. I work with both front-end and back-end development .I am studying Economics in the University of Lagos. I am interested in learning new things",
      profession: "Fullstack js",
    },
    show: false,
    date: new Date(),
  };
  componentDidMount() {
    this.timer = setInterval(() => this.refrechDate(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  refrechDate() {
    this.setState({
      date: new Date(),
    });
  }
  onOpenModal = () => {
    this.setState({ show: true });
  };
  onCloseModal = () => {
    this.setState({ show: false });
  };
  render() {
    const { show, date } = this.state;
    return (
      <React.Fragment>
        <div className="date-container">
          <h2>It's : {date.toLocaleTimeString()}</h2>
        </div>
        <div className="App">
          <h1 style={{ color: "#3fb0ac" }}>Welcome to my website</h1>
          <p>press the button to show the profile </p>
          <div>
            <i className="fas fa-level-down-alt"></i>
          </div>

          <button className="btn" onClick={this.onOpenModal}>
            Show Profile
          </button>
          <Modal open={show} onClose={this.onCloseModal} center>
            <Profil persone={this.state.Person} />
          </Modal>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
