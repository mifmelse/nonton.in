// bg-image
import bg1 from '../assets/img/bg/bgSlide1.jpeg'
import bg3 from '../assets/img/bg/bgSlide3.jpeg'
import bg4 from '../assets/img/bg/bgSlide4.jpeg'
import bg5 from '../assets/img/bg/bgSlide5.jpeg'
import bg6 from '../assets/img/bg/bgSlide6.jpeg'
import bg7 from '../assets/img/bg/bgSlide7.jpeg'

import { useState } from "react"

const BackgroundSlide = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const BgSlider = [bg1, bg3, bg4, bg5, bg6, bg7]

    console.log(currentIndex);
    
    useState(()=>{
        setInterval(() => {
            setCurrentIndex(current => (current + 1) % BgSlider.length)
        }, 5000);
    },[currentIndex])
    
    return (
        <div style={{backgroundImage:`url(${BgSlider[currentIndex]})`}} className='max-w-screen h-screen bg-cover bg-center ease-in-out duration-500'></div>
    )
}
export default BackgroundSlide