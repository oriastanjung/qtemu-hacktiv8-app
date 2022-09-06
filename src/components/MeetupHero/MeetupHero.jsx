import React from "react";

function MeetupHero(props) {
  return (
    <section className="meetup-hero">
      <div className="meetup-hero-img">{/* {'n'} */}</div>
      <div className="meetup-hero-desc">
        <div className="meetup-hero-title">
          <h4>{props.title}</h4>
        </div>
        <div className="meetup-hero-info">
          <p className="meetup-hero-info-location">
            Location <span> : </span> {props.location}
          </p>
          <p className="meetup-hero-info-member">
            Members <span> : </span> {props.member}
          </p>
          <p className="meetup-hero-info-organizers">
            Organizers <span> : </span> {props.organizer}
          </p>
        </div>
        <div className="meetup-hero-btn">
          <button onClick={props.onChangeTitle}>Join Us</button>
        </div>
      </div>
    </section>
  );
}

export default MeetupHero;
