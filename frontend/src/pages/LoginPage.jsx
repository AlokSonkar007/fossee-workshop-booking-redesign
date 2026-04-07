function LoginPage() {
  return (
    <section className="page-section">
      <div className="container auth-container">
        <div className="auth-card card">
          <div className="auth-header">
            <p className="auth-tag">Welcome back</p>
            <h1 className="auth-title">Sign in to continue</h1>
            <p className="auth-subtitle">
              Access workshop details, proposals and your account in one place.
            </p>
          </div>

          <form className="auth-form">
            <div className="form-field">
              <label htmlFor="username">Username</label>
              <input id="username" type="text" placeholder="Enter your username" />
            </div>

            <div className="form-field">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" placeholder="Enter your password" />
            </div>

            <button type="button" className="btn btn-primary auth-submit">
              Sign In
            </button>
          </form>

          <div className="auth-links">
            <a href="/register">Create an account</a>
            <a href="/">Forgot password?</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginPage