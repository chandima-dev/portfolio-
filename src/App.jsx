// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home'; 
import ContactUs from './pages/ContactUs/ContactUs'; 
import Projects from './pages/Projects/Projects'; 
import AboutUs from './pages/About/About'; 
import HomeSlider from './components/HomeSlider/HomeSlider'; 

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        
        <Routes>
          <Route path="/" element={
            <>
              <HomeSlider /> 
              <Home />
            </>
          } />
          <Route path="/contactus" element={
            <>
              <ContactUs />
            </>
          } />
          <Route path="/aboutus" element={
            <>
              <AboutUs />
            </>
          } />
          <Route path="/projects" element={
            <>
              <Projects />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
