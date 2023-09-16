import Navbar from './sections/navbar/Navbar.jsx';
import Header from './sections/header/Header.jsx';
import About from './sections/about/About.jsx';
import Services from './sections/services/Services.jsx';
import Portfolio from './sections/portfolio/Portfolio.jsx';
import FAQs from './sections/faqs/FAQs.jsx';
import Contact from './sections/contact/Contact.jsx';
import Footer from './sections/footer/Footer.jsx';
import FloatingNav from './sections/floating-nav/FloatingNav.jsx';

export default function App() {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <FAQs />
      <Contact />
      <Footer />
      <FloatingNav />
    </main>
  );
}
