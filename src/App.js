import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/js/Home';
import AboutUs from './components/js/AboutUs/AboutUs';
import Women from './components/js/Women/Women';
import Men from './components/js/Men/Men';
import Header from './components/js/Header';
import Footer from './components/js/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/women" element={<Women />} />
          <Route path="/women" element={<Men />} />
        </Routes>
        <Footer class=""/>
      </Router>

      {/* <Section1/>
      <ShopCollections/>
      <HotCategories/>
      <TopProducts/>
      <SalesUp/>
      <ClientReview/>
      <FirstOrder/>
      <FollowUs/>
      <Footer/> */}
    </div>
  );
}

export default App;
