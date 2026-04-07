function RegisterPage() {
  return (
    <section className="page-section">
      <div className="container auth-container">
        <div className="auth-card card">
          <div className="auth-header">
            <p className="auth-tag">Create account</p>
            <h1 className="auth-title">Coordinator registration</h1>
            <p className="auth-subtitle">
              Fill in your details to create an account and start proposing workshops.
            </p>
          </div>

          <form className="auth-form">
            <div className="form-field">
              <label htmlFor="fullName">Full name</label>
              <input id="fullName" type="text" placeholder="Enter your full name" />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Enter your email" />
            </div>

            <div className="form-field">
              <label htmlFor="institute">Institute</label>
              <input id="institute" type="text" placeholder="Enter your institute name" />
            </div>

            <div className="form-field">
              <label htmlFor="department">Department</label>
              <input id="department" type="text" placeholder="Enter your department" />
            </div>

            <div className="form-field">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" placeholder="Create a password" />
            </div>

            <button type="button" className="btn btn-primary auth-submit">
              Register
            </button>
          </form>

          <div className="auth-links">
            <a href="/login">Already have an account?</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterPage