function WorkshopStatusPage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-intro">
          <p className="auth-tag">Workshop status</p>
          <h1 className="page-title">Track workshop requests</h1>
          <p className="page-subtitle">
            Keep track of proposed workshops and their current progress.
          </p>
        </div>

        <div className="status-list">
          <article className="card status-card">
            <div className="status-card-top">
              <h2>Python Basics</h2>
              <span className="status-badge status-pending">Pending</span>
            </div>
            <p>Date: 18 April 2026</p>
            <p>Coordinator: Alok Sonkar</p>
          </article>

          <article className="card status-card">
            <div className="status-card-top">
              <h2>Scilab Workshop</h2>
              <span className="status-badge status-accepted">Accepted</span>
            </div>
            <p>Date: 24 April 2026</p>
            <p>Coordinator: Alok Sonkar</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default WorkshopStatusPage