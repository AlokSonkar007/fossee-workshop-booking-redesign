function StatisticsPage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-intro">
          <p className="auth-tag">Workshop statistics</p>
          <h1 className="page-title">Public workshop statistics</h1>
          <p className="page-subtitle">
            Filter workshop data and view sample state-wise and type-wise trends.
          </p>
        </div>

        <div className="statistics-layout">
          <aside className="card stats-filter-card">
            <h2>Filters</h2>

            <div className="form-field">
              <label htmlFor="fromDate">From date</label>
              <input id="fromDate" type="date" />
            </div>

            <div className="form-field">
              <label htmlFor="toDate">To date</label>
              <input id="toDate" type="date" />
            </div>

            <div className="form-field">
              <label htmlFor="workshopFilter">Workshop</label>
              <select id="workshopFilter">
                <option>All workshops</option>
                <option>Python Basics</option>
                <option>Scilab Workshop</option>
                <option>Open Source Intro</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="stateFilter">State</label>
              <select id="stateFilter">
                <option>All states</option>
                <option>Maharashtra</option>
                <option>Karnataka</option>
                <option>Delhi</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="sortBy">Sort by</label>
              <select id="sortBy">
                <option>Oldest</option>
                <option>Newest</option>
              </select>
            </div>

            <div className="stats-filter-actions">
              <button className="btn btn-primary" type="button">Apply</button>
              <button className="btn stats-secondary-btn" type="button">Reset</button>
            </div>
          </aside>

          <div className="statistics-main">
            <div className="statistics-top-cards">
              <div className="card stats-mini-card">
                <h3>State chart</h3>
                <div className="mini-bars">
                  <span style={{ height: '70%' }}></span>
                  <span style={{ height: '45%' }}></span>
                  <span style={{ height: '85%' }}></span>
                  <span style={{ height: '55%' }}></span>
                </div>
              </div>

              <div className="card stats-mini-card">
                <h3>Workshops chart</h3>
                <div className="mini-bars">
                  <span style={{ height: '50%' }}></span>
                  <span style={{ height: '90%' }}></span>
                  <span style={{ height: '60%' }}></span>
                  <span style={{ height: '40%' }}></span>
                </div>
              </div>
            </div>

            <div className="card stats-table-card">
              <div className="stats-table-header">
                <h2>Workshop records</h2>
              </div>

              <div className="stats-table-wrapper">
                <table className="stats-table">
                  <thead>
                    <tr>
                      <th>Sr No.</th>
                      <th>Coordinator Name</th>
                      <th>Institute Name</th>
                      <th>Instructor Name</th>
                      <th>Workshop Name</th>
                      <th>Workshop Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Alok Sonkar</td>
                      <td>IIT Bombay</td>
                      <td>FOSSEE Team</td>
                      <td>Python Basics</td>
                      <td>18 Apr 2026</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Aryan Sharma</td>
                      <td>XYZ Institute</td>
                      <td>FOSSEE Team</td>
                      <td>Scilab Workshop</td>
                      <td>24 Apr 2026</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatisticsPage