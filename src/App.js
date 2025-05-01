import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./page/Home";
import AboutUs from "./page/AboutUs";
import Blog from "./page/Blog";
import Projects from "./page/Projects";
import GetInvolved from "./page/GetInvolved";
import Donate from "./page/Donate";
import ContactUs from "./page/ContactUs";
import SignIn from './page/SignIn';
import ThankYou from "./page/ThankYou";
import UserProfile from "./page/UserProfile";
import Volunteer from "./page/Volunteer";
import Events from "./page/Events";
import Media from "./page/Media";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/thankyou" element={<ThankYou />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/events" element={<Events />} />
            <Route path="/media" element={<Media />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
