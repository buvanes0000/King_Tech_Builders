import React from 'react'
import "./Background.css"
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
 import video1 from "../assets/3D House Animation.webm"

const Background = ({playStatus,heroCount}) => {
if(playStatus) {
    return (
        <video className='background' autoPlay loop muted><source src={video1} type="video/mp4" /></video>
    )
}
else if(heroCount === 0) {
    return <img className='background' src={image1} alt=''/>

}
else if(heroCount === 1) {
    return <img className='background' src={image2} alt=''/>
    
}
else if(heroCount === 2) {
    return <img className='background' src={image3} alt=''/>
    
}
}

export default Background
