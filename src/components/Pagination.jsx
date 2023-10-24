import {PropTypes} from 'prop-types'

const Pagination = ({page, setPage}) => {

    const handleNext = () =>{
        setPage(page + 1);
        window.scrollTo({top:0, behavior:'smooth'})
    }
    const handlePrev = () =>{
        if(page !== 1){
            setPage(page - 1);
            window.scrollTo({top:0, behavior:'smooth'})
        }
    }

    return (
        <div className='mx-auto my-8 font-bold flex text-center items-center'>
            <button className="m-2 p-2 rounded-full bg-white" onClick={handlePrev}>PREV</button>
            <div className="m-2 p-2 rounded-full bg-white min-w-[2.5rem]">{page}</div>
            <button className="m-2 p-2 rounded-full bg-white" onClick={handleNext}>NEXT</button>
        </div>
    )
}

Pagination.propTypes={
    page: PropTypes.number,
    setPage: PropTypes.func,
}
export default Pagination;