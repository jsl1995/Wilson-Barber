import React, { useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';

// Scroll to top wrapper
const ScrollToTop = ({ children }: { children?: React.ReactNode }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return <>{children}</>;
};

/** Layout and routes without a router, so it can be rendered on the server too. */
export const AppShell: React.FC = () => (
  <ScrollToTop>
    <div className="flex flex-col min-h-screen bg-brand-dark font-sans text-neutral-100 selection:bg-brand-gold selection:text-brand-dark">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          {/* Blog page exists but is hidden from navigation (noindex placeholder) */}
          <Route path="/blog" element={<Blog />} />
          {/* pages/About.tsx is intentionally not routed: it still contains template placeholder content */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </ScrollToTop>
);

const App: React.FC = () => (
  <BrowserRouter>
    <AppShell />
  </BrowserRouter>
);

export default App;
