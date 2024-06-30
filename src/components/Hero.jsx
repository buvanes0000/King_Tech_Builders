import React, { useEffect } from 'react';
import './Hero.css';
import { FaPhone } from 'react-icons/fa'; // Import the specific icon
import play_icon from '../assets/play_icon.png';
import pause_icon from '../assets/pause_icon.png';

const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {

  // useEffect to change image every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount(prevCount => (prevCount + 1) % heroData.length);
    }, 15000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [setHeroCount, heroData.length]);

  // Ensure heroData has elements before rendering
  if (!Array.isArray(heroData) || heroData.length === 0) {
    return null; // or display a loading spinner or fallback UI
  }

  return (
    <div className='hero section' id='hero'>
      <div className='hero-text'>
        <h1>{heroData[heroCount]?.text1}</h1> {/* Using <h1> tag for main heading */}
        <p>{heroData[heroCount]?.text2}</p> {/* Using <p> tag for subheading */}
      </div>
      <a href="tel:+919360254607" className="hero-explore">
 {/* Change to an anchor tag for call action */}
        <p>Call Us</p>
        <FaPhone /> {/* Using React Icon for the call button */}
      </a>
      <div className="hero-dot-play">
        <ul className='hero-dots'>
          {heroData.map((_, index) => (
            <li
              key={index}
              onClick={() => setHeroCount(index)}
              className={heroCount === index ? "hero-dot orange" : "hero-dot"}
            ></li>
          ))}
        </ul>
        <div className="hero-play">
          <img
            onClick={() => setPlayStatus(!playStatus)}
            src={playStatus ? pause_icon : play_icon}
            alt="Play/Pause"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
