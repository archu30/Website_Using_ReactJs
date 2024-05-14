import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './Components/Banner';
import Expert from './Components/Expert';
import Footer from './Components/Footer';
import Header from './Components/Header';
import NewsLetter from './Components/NewsLetter';
import Plans from './Components/Plans';
import About from './/pages/About'; // Import the About component
import Detail from './/pages/Detail'; // Import the Deatil component
import Contact from './/pages/Contact'; // Import the Deatil component


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

// Define Home component (can include Banner, Expert, NewsLetter, Plans)
function Home() {
  return (
    <div>
      <Banner />
      <Expert />
      <NewsLetter />
      <Plans />
    </div>
  );
}

export default App;
