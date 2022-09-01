import React, { Component } from "react";

export default class MeetupHero extends Component {
  render() {
    return (
      <section className="meetup-hero">
        <div className="meetup-hero-img">
            {/* {'n'} */}
        </div>
        <div className="meetup-hero-desc">
          <div className="meetup-hero-title">
            <h4>Hacktiv8 Meetup</h4>
          </div>
          <div className="meetup-hero-info">
            <p className="meetup-hero-info-location">
                Location <span> : </span> Jakarta, Indonesia
            </p>
            <p className="meetup-hero-info-member">
                Members <span> : </span> 1,078
            </p>
            <p className="meetup-hero-info-organizers">
                Organizers <span> : </span> Adhy Wiranata
            </p>
          </div>
          <div className="meetup-hero-btn">
            <button>Join Us</button>
          </div>
        </div>
      </section>
    );
  }
}
