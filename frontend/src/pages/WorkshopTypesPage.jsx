import { workshopTypes } from '../data/workshops'

function WorkshopTypesPage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-intro">
          <p className="auth-tag">Explore workshops</p>
          <h1 className="page-title">Workshop types</h1>
          <p className="page-subtitle">
            Browse available workshop categories, their duration and a short description.
          </p>
        </div>

        <div className="workshop-grid">
          {workshopTypes.map((workshop) => (
            <article key={workshop.id} className="workshop-card card">
              <div className="workshop-card-top">
                <h2>{workshop.name}</h2>
                <span className="workshop-badge">{workshop.duration}</span>
              </div>

              <p>{workshop.description}</p>

              <button className="btn btn-primary">View Details</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkshopTypesPage