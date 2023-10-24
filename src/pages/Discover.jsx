import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import {PropTypes} from 'prop-types'

import Pagination from "../components/Pagination"
import Card from "../components/card"

const Discover = () => {

    const [discover, setDiscover] = useState([])
    const [page, setPage] = useState(1);

    const params = useParams()
    const media = params.media;

    console.log(typeof(page));

    const fetchDiscover = () => {
        axios.get(`${import.meta.env.VITE_TMDB_BASE_URL}/discover/${media}?page=${page}`,{
            headers:{'Authorization': `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`},
        })
        .then(discover=>{
            setDiscover(discover.data.results)
        })
    }

    useEffect(()=>{
        fetchDiscover()
    },[media, page])

    return (
        <div>
            <div className='flex flex-col pt-16 pb-10 bg-gradient-to-br from-gray-600 from-10% to-black to-80% min-h-screen'>
                <h1 className='mx-auto mt-4 text-2xl font-bold text-center px-4 text-white'>Menampilkan daftar {media !=="tv"? 'movie' : 'series' } halaman {page}</h1>
                <div className="mt-8 flex flex-wrap justify-center gap-4 lg:gap-8 max-w-[87rem] self-center">
                    {discover.map(item =>(
                        <Card key={item.id} data={item}/>
                    ))}
                </div>
                <Pagination
                    setPage={setPage}
                    page={page}
                />
            </div>
        </div>
    )
}

Card.propTypes={
    media: PropTypes.string,
    page: PropTypes.number,
}
export default Discover