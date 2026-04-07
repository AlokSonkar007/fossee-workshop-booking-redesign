function ProfilePage() {
  return (
    <section className="page-section">
      <div className="container profile-container">
        <div className="page-intro">
          <p className="auth-tag">User profile</p>
          <h1 className="page-title">Coordinator profile</h1>
          <p className="page-subtitle">
            View personal information and workshop-related details in one place.
          </p>
        </div>

        <div className="profile-grid">
          <div className="card profile-card">
            <h2>Profile details</h2>
            <div className="profile-list">
              <div><span>Name</span><strong>Alok Sonkar</strong></div>
              <div><span>Email</span><strong>aloksonkar1264@gmail.com</strong></div>
              <div><span>Institute</span><strong>IET Lucknow</strong></div>
              <div><span>Department</span><strong>Computer Science</strong></div>
              <div><span>Location</span><strong>Lucknow</strong></div>
            </div>
          </div>

          <div className="card profile-card">
            <h2>Workshop summary</h2>
            <div className="profile-summary-boxes">
              <div className="summary-box">
                <strong>3</strong>
                <span>Total workshops</span>
              </div>
              <div className="summary-box">
                <strong>1</strong>
                <span>Pending</span>
              </div>
              <div className="summary-box">
                <strong>2</strong>
                <span>Accepted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfilePage