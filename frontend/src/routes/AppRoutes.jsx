import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import WorkshopTypesPage from '../pages/WorkshopTypesPage'
import ProposeWorkshopPage from '../pages/ProposeWorkshopPage'
import ProfilePage from '../pages/ProfilePage'
import WorkshopStatusPage from '../pages/WorkshopStatusPage'
import StatisticsPage from '../pages/StatisticsPage'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="workshop-types" element={<WorkshopTypesPage />} />
        <Route path="propose-workshop" element={<ProposeWorkshopPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="workshop-status" element={<WorkshopStatusPage />} />
        <Route path="statistics" element={<StatisticsPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes