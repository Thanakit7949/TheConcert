import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection'
import EventCard from './components/EventCard';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Concerts from './components/Concerts';
import NightClub from './components/NightClub';
import Sports from './components/Sports';
import Promotions from './components/Promotions';
import Products from './components/Products';
import News from './components/News';
import BusinessCustomers from './components/BusinessCustomers';
import TicketProtection from './components/TicketProtection';
import './App.css';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <div className="event-section">
                  <EventCard image={image1} title="Event 1" />
                  <EventCard image={image2} title="Event 2" />
                  <EventCard image={image3} title="Event 3" />
                  <EventCard image={image4} title="Event 4" />
                </div>
              </>
            } />
             <Route path="/Home" element={<Home />} />
            <Route path="/concerts" element={<Concerts />} />
            <Route path="/night-club" element={<NightClub />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/promotions" element={<Promotions />} />
            <Route path="/products" element={<Products />} />
            <Route path="/news" element={<News />} />
            <Route path="/business-customers" element={<BusinessCustomers />} />
            <Route path="/ticket-protection" element={<TicketProtection />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
