import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import HomePage from './pages/HomePage'
import FormPage from './pages/FormPage'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import OpenPage from './pages/OpenPage'

const RoutesPage = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegistrationPage />} />
          <Route
            path='/homepage'
            element={
              <ProtectedRoute>
                <OpenPage />
              </ProtectedRoute>
            }
          />
          <Route
            path='/form'
            element={
              <ProtectedRoute>
                <FormPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </React.Suspense>
  )
}

export default RoutesPage