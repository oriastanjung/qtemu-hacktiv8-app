import React from "react";

function PastMeetups() {
  return (
    <>
      <div className="past-meetups-section-header">
        <h4>Past Meetups</h4>
        <p>See all</p>
      </div>
      <section className="past-meetups">
        <div className="past-meetups-list">
          <div className="past-meetups-item">
            <p className="date">27 November 2017</p>
            <div className="past-meetups-desc">
              <p>#39 JakartaJS April Meetup with kumparan</p>
              <p>
                139 <span>went</span>
              </p>
            </div>
            <div className="past-meetups-btn">
              <button>View</button>
            </div>
          </div>
          <div className="past-meetups-item">
            <p className="date">27 October 2017</p>
            <div className="past-meetups-desc">
              <p>#39 JakartaJS April Meetup with BliBi</p>
              <p>
                113 <span>went</span>
              </p>
            </div>
            <div className="past-meetups-btn">
              <button>View</button>
            </div>
          </div>
          <div className="past-meetups-item">
            <p className="date">27 September 2017</p>
            <div className="past-meetups-desc">
              <p>#39 JakartaJS April Meetup with Hacktiv8</p>
              <p>
                110 <span>went</span>
              </p>
            </div>
            <div className="past-meetups-btn">
              <button>View</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PastMeetups;
