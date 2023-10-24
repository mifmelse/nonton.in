// bg-image
// import bgDark from '../assets/img/bg/main.jpg'
// import bgPattern from '../assets/img/bg/bgPattern.jpg'

import { useState } from "react"

const BackgroundSlide = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const BgSlider = ['https://source.unsplash.com/1000x600?movie', 'https://source.unsplash.com/1000x600?cinema']

    console.log(currentIndex);
    
    useState(()=>{
        setInterval(() => {
            setCurrentIndex(current => (current + 1) % BgSlider.length)
        }, 20000);
    },[currentIndex])
    
    return (
        <div style={{backgroundImage:`url(${BgSlider[currentIndex]})`}} className='max-w-screen h-screen bg-cover bg-center ease-in-out duration-500'></div>
    )
}
export default BackgroundSlide