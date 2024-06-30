
import { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css'
import Background from './components/Background.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import  Service  from './components/Service.jsx';
import Projects from './components/Projects.jsx';
import  CEO  from './components/CEO.jsx';
import BlogSection from './components/BlogSection.jsx';
import TestimonialSection from './components/TestimonialSection.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';
import ElevationGallery from './components/ElevationGallery.jsx';

function App() {
  let heroData = [
    { text1: "Build Your Dream House", text2: "Create the perfect home with our expert builders." },
    { text1: "Design Your Desired World", text2: "Transform your space into your personal paradise." },
    { text1: "Reliable Construction Services", text2: "We ensure quality and reliability in every project." }
  ];
  
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);


  return (
    <>
    <Background heroCount={heroCount} playStatus={playStatus} />
    <Navbar/>
    <Hero heroData={heroData || []} setHeroCount={setHeroCount} heroCount={heroCount} setPlayStatus={setPlayStatus} playStatus={playStatus} />
    <Service />
    <Projects/>
    <ElevationGallery/>
    <About/>
    <CEO/>
    <BlogSection/>
    <TestimonialSection/>
    <Contact/>
    <Footer/>


    </>
  )
}

export default App
