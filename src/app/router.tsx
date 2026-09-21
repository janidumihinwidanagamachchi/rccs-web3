import { Routes, Route } from 'react-router-dom'
import { HomePage } from '@/pages/HomePage'
import { EventsPage } from '@/pages/EventsPage'
import { SportsPage } from '@/pages/SportsPage'
import { CalendarPage } from '@/pages/CalendarPage'
import { AnnouncementsPage } from '@/pages/AnnouncementsPage'
import { ContactPage } from '@/pages/ContactPage'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/sports" element={<SportsPage />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/announcements" element={<AnnouncementsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}
