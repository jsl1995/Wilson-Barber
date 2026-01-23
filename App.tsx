import React, { useLayoutEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';

// Scroll to top wrapper
const ScrollToTop = ({ children }: { children?: React.ReactNode }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop>
        <div className="flex flex-col min-h-screen bg-brand-dark font-sans text-neutral-100 selection:bg-brand-gold selection:text-brand-dark">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <Analytics />
        </div>
      </ScrollToTop>
    </Router>
  );
};

export default App;