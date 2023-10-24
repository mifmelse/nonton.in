// components
import {LuChevronLeft, LuChevronRight} from 'react-icons/lu'
import PropTypes from 'prop-types'; // ES6

const MovieCarousel = ({sid, title, datanya, Component}) => {

    const handleLeft = () =>{
        var slider = document.getElementById(`${sid}-slider`);
        slider.scrollLeft = slider.scrollLeft - 231;
    }

    const handleRight = () => {
        var slider = document.querySelector(`#${sid}-slider`);
        slider.scrollLeft = slider.scrollLeft + 231; // lebar card 215px + gap 16px = 231 (jika mau scroll 6 card sekaligus tinggal dikali 6 = 1386px)
    }

    console.log(datanya);
    

    return(
        <div className="my-2 cs:my-4">
            <div className="flex justify-between items-center w-full pe-1 cs:pe-2 lg:pe-4 mb-3">
                <h1 className="ms:text-lg w-[60%] md:text-2xl xl:text-3xl font-bold uppercase text-white text-shadow shadow-black">{title}</h1>
                <div className='flex'>
                    <button onClick={handleLeft} className='rounded-full border border-white/50 bg-yellow-400/80 p-2 m-1 text-white opacity-50 hover:opacity-100'>
                        <LuChevronLeft size={30}/>
                    </button>
                    <button onClick={handleRight} className='rounded-full border border-white/50 bg-yellow-400/80 p-2 m-1 text-white opacity-50 hover:opacity-100'>
                        <LuChevronRight size={30}/>
                    </button>
                </div>
            </div>
            <div id={`${sid}-slider`} className='flex overflow-x-scroll scroll-smooth scrollbar-hide gap-x-4'>
                {datanya.map((item, i) => (
                    <Component key={i} data={item}/>
                ))}
            </div>
        </div>
    )

}
MovieCarousel.propTypes = {
    sid: PropTypes.string,
    title: PropTypes.string,
    datanya: PropTypes.array,
    Component: PropTypes.func,
}

export default MovieCarousel;