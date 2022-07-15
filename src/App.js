import { Route, Routes } from 'react-router-dom';

// Imported Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Careers from './components/Careers';
import Waitlist from './components/Waitlist';
import Store from './components/Store';
import News from './components/News';

function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about-us" element={<About/>}/>
          <Route exact path="/contact-us" element={<Contact/>}/>
          <Route exact path="/careers" element={<Careers/>}/>
          <Route exact path="/store" element={<Store/>}/>
          <Route exact path="/waitlist" element={<Waitlist/>}/>
          <Route exact path="/news" element={<News/>}/>
        </Routes>
      <Footer />        
    </div>
  );
}

export default App;
