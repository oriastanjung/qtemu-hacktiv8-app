import React from 'react'

function Members() {
  return (
    <>
        <div className="members-section-header">
          <h4>Members</h4>
          <p>See all</p>
        </div>
        <section className="members-section">
          <div className="members-section-items">
            <div className="member-img"></div>
            <div className="member-desc">
              <p className="member-role">Organizers</p>
              <div className="member-info">
                <p>Adhy Wiranata</p>
                <p>4 others.</p>
              </div>
            </div>
          </div>
        </section>
      </>
  )
}

export default Members