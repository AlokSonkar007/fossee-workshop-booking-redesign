function ProposeWorkshopPage() {
  return (
    <section className="page-section">
      <div className="container propose-container">
        <div className="page-intro">
          <p className="auth-tag">Workshop request</p>
          <h1 className="page-title">Propose a workshop</h1>
          <p className="page-subtitle">
            Choose a workshop type, pick a date and submit your request.
          </p>
        </div>

        <div className="propose-card card">
          <form className="propose-form">
            <div className="form-field">
              <label htmlFor="workshopType">Workshop type</label>
              <select id="workshopType">
                <option>Python Basics</option>
                <option>Scilab Workshop</option>
                <option>Introduction to Open Source</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="workshopDate">Preferred date</label>
              <input id="workshopDate" type="date" />
            </div>

            <div className="propose-note-box">
              <p>
                Please review the workshop details before submitting your request.
              </p>
            </div>

            <label className="checkbox-row">
              <input type="checkbox" />
              <span>I accept the terms and conditions</span>
            </label>

            <button type="button" className="btn btn-primary">
              Submit proposal
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ProposeWorkshopPage