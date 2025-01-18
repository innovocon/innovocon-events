import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { HackNex } from './pages/HackNex';
import { HackFlag } from './pages/HackFlag';
import { Zenith } from './pages/Zenith';
import { Gallery } from './pages/Gallery';
import { Sponsors } from './pages/Sponsors';
import { Contact } from './pages/Contact';
import { Admin } from './pages/Admin';
import { EventProvider } from './context/EventContext';
import './index.css';

export default function App() {
  return (
    <EventProvider>
      <Router>
        <div className="min-h-screen bg-gray-900 flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hacknex" element={<HackNex />} />
              <Route path="/hackflag" element={<HackFlag />} />
              <Route path="/zenith" element={<Zenith />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/sponsors" element={<Sponsors />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </EventProvider>
  );
}