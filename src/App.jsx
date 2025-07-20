import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';


// Lazy load heavier sections
const Gallery = lazy(() => import('./components/Gallery'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const ServiceMenu = lazy(() => import('./components/ServiceMenu'));

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />

      {/* Lazy-loaded sections */}
      <Suspense fallback={<div>Loading gallery...</div>}>
        <Gallery />
      </Suspense>

      <Booking />
      <Contact />

      <Suspense fallback={<div>Loading testimonials...</div>}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<div>Loading service menu...</div>}>
        <ServiceMenu />
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
