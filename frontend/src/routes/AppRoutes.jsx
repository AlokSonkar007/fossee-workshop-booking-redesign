import { Routes, Route } from 'react-router-dom'

function Home() {
  return <h1 style={{ padding: '40px' }}>Home</h1>
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default AppRoutes