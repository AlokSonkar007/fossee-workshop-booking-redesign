function HomePage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="hero-card card">
          <div className="hero-content">
            <p className="eyebrow">Mobile-first workshop booking experience</p>
            <h1 className="hero-title">Book and manage FOSSEE workshops with ease</h1>
            <p className="hero-text">
              A cleaner, faster and more accessible interface for students,
              coordinators and instructors.
            </p>

            <div className="hero-actions">
              <a href="/workshop-types" className="btn btn-primary">
                Explore Workshop Types
              </a>
              <a href="/login" className="btn hero-secondary-btn">
                Login
              </a>
            </div>
          </div>

          <div className="hero-info-grid">
            <div className="hero-info-box">
              <h3>Responsive</h3>
              <p>Designed for students using phones first.</p>
            </div>
            <div className="hero-info-box">
              <h3>Accessible</h3>
              <p>Clear hierarchy, readable spacing and better usability.</p>
            </div>
            <div className="hero-info-box">
              <h3>Fast</h3>
              <p>Lightweight React setup with focused UI improvements.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage