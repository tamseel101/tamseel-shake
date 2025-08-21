import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Header from './common/Header';

function App() {
  return (
    <>
      <Header />
      <Hero id="hero"/>
      <Projects id="projects"/>
      <Contact id="contact"/>
      <Footer />
    </>
  );
}

export default App;
