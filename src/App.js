import React from "react"
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MeetupHero from "./components/MeetupHero/MeetupHero";
import NextMeetup from "./components/NextMeetup/NextMeetup";
import AboutMeetup from "./components/AboutMeetup/AboutMeetup";
import Members from "./components/Members/Members";
import PastMeetups from "./components/PastMeetups/PastMeetups";
import Footer from "./components/Footer/Footer";

class App extends React.Component{
  render() {
    return (
    <>
      <Navbar />
      <MeetupHero />
      <NextMeetup />
      <AboutMeetup />
      <Members />
      <PastMeetups />
      <Footer />
    </>
    );
  }
}

export default App;
