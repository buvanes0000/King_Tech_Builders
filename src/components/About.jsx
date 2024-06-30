import React from 'react';
import ReactPlayer from 'react-player';
import './About.css'; // Make sure to import your stylesheet
import about1 from "../assets/about1.png"
import about2 from "../assets/about2.png"
import about3 from "../assets/about3.png"
import about4 from "../assets/about4.png"

const About = () => {
  return (
    <div className="responsive-container-block bigContainer section" id="about">
      <div className="responsive-container-block Container">
        <div className="responsive-container-block leftSide">
          <p className="text-blk heading">About Us</p>
          <p className="text-blk subHeading">
            This is the story of how we came together as friends. Initially, we worked in a startup company and later planned to start our own company together. As a result, we finally achieved our goal of forming a team. Now, we are continuously improving and pursuing our dream together.
          </p>
        </div>
        <div className="responsive-container-block rightSide">

          <img className="number2img" src={about1} alt="image1" />
          <img className="number3img" src={about2} alt="image2" />
          <img className="number5img" src={about3}  alt='image3'/>
          <ReactPlayer
            className="number4vid"
            url="https://youtube.com/shorts/AKC7dktcg7w?si=wHO8qSRaDBLxsoDY"
            controls
            width="60%"
            height="40%"
            autoPlay={true}
          />
          <img className="number6img" src={about4} alt="image4" />
        </div>
      </div>
    </div>
  );
};

export default About;
