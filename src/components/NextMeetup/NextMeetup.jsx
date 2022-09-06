import React from "react";

function NextMeetup() {
  return (
    <section className="next-meetup">
      <h4>Next Meetup</h4>
      <div className="next-meetup-message">
        <div className="next-meetup-message-header">
          <h5>Awesome meetup and event</h5>
          <p className="date">25 January 2019</p>
        </div>
        <div className="next-meetup-message-body">
          <p>
            Hello, Javascript & Node.js Ninjas! Get ready for our monthly meetup
            JakartaJS! This will be our fifth meetup of 2018! The Meetup format
            will contain some short stories and technical talks. If you have a
            short announcement you'd like to share with the audience, you may do
            so during open mic announcements.
            <br />
            Remember to bring a photo ID to get through building security.
            <br />
            ----
            <br />
            See you there! <br />
            Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers
          </p>
        </div>
      </div>
    </section>
  );
}

export default NextMeetup;
