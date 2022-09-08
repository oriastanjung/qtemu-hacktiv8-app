import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MeetupHero from "./components/MeetupHero/MeetupHero";
import NextMeetup from "./components/NextMeetup/NextMeetup";
import AboutMeetup from "./components/AboutMeetup/AboutMeetup";
import Members from "./components/Members/Members";
import PastMeetups from "./components/PastMeetups/PastMeetups";
import Footer from "./components/Footer/Footer";
import LatihanHooks from "./components/LatihanHooks/LatihanHooks";

function App() {
  const [meetUpHero, setMeetUpHero] = useState({
    title: "Hacktiv8 Meetup",
    location: "Jakarta, Indonesia",
    member: 1078,
    organizer: "Adhy Wiranata",
  });

  const handleChangeTitle = () => {
    setMeetUpHero({...meetUpHero, title: "WOW MEETUP"})
  }
  return (
    <>
      <Navbar title={"QTemu"} />
      <MeetupHero
        title={meetUpHero.title}
        location={meetUpHero.location}
        member={meetUpHero.member}
        organizer={meetUpHero.organizer}
        onChangeTitle = {handleChangeTitle}
      />
      <NextMeetup />
      <AboutMeetup />
      <Members />
      <PastMeetups />
      <Footer />
      <LatihanHooks />
    </>
  );
}

export default App;
