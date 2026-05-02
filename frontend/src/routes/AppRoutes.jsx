import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Portfolio from '../pages/Portfolio'
import Contact from '../pages/Contact'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import TermsCondition from '../pages/TermsCondition'
import ReturnRefund from '../pages/ReturnRefund'
import Login from '../pages/admin/Login'
import Dashboard from '../pages/admin/Dashboard'
import Enquiries from '../pages/admin/Enquiries'
import AdminPortfolio from '../pages/admin/AdminPortfolio'
import AdminServices from '../pages/admin/AdminServices'
import AdminSettings from '../pages/admin/AdminSettings'
import PlaceholderPage from '../pages/admin/PlaceholderPage'
import ProtectedRoute from '../components/ProtectedRoute'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy_policy" element={<PrivacyPolicy />} />
      <Route path="/terms_condition" element={<TermsCondition />} />
      <Route path="/return_refund" element={<ReturnRefund />} />
      <Route path="/login" element={<Login />} />
      
      {/* Protected Admin Routes */}
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/enquiries" element={<ProtectedRoute><Enquiries /></ProtectedRoute>} />
      <Route path="/admin/portfolio" element={<ProtectedRoute><AdminPortfolio /></ProtectedRoute>} />
      <Route path="/admin/services" element={<ProtectedRoute><AdminServices /></ProtectedRoute>} />
      <Route path="/admin/settings" element={<ProtectedRoute><AdminSettings /></ProtectedRoute>} />
      
      {/* Admin Placeholders */}
      <Route path="/bookings" element={<ProtectedRoute><PlaceholderPage title="Bookings Management" /></ProtectedRoute>} />
      <Route path="/categories" element={<ProtectedRoute><PlaceholderPage title="Categories Management" /></ProtectedRoute>} />
      <Route path="/testimonials" element={<ProtectedRoute><PlaceholderPage title="Testimonials Management" /></ProtectedRoute>} />
      <Route path="/customers" element={<ProtectedRoute><PlaceholderPage title="Customers Management" /></ProtectedRoute>} />
      <Route path="/admin/pages" element={<ProtectedRoute><PlaceholderPage title="Pages Management" /></ProtectedRoute>} />
      <Route path="/admin/users" element={<ProtectedRoute><PlaceholderPage title="Users & Admins" /></ProtectedRoute>} />
      <Route path="/admin/reports" element={<ProtectedRoute><PlaceholderPage title="Reports & Analytics" /></ProtectedRoute>} />
    </Routes>
  )
}

export default AppRoutes