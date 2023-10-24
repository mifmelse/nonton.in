import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

import Pagination from "../components/Pagination"
import Card from "../components/card"

const AllMoviePage = () => {

    const [trending, setTrending] = useState([])
    const [page, setPage] = useState(1);

    const params = useParams()

    const fetchTrending = () => {
        axios.get(`${import.meta.env.VITE_TMDB_BASE_URL}/trending/all/day?page=${page}`,{
            headers:{'Authorization': `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`},
        })
        .then(trending=>{
            setTrending(trending.data.results)
        })
    }

    useEffect(()=>{
        fetchTrending()
    },[params.media, page])
    
    return (
        <div>
            <div className='flex flex-col pt-16 pb-10 bg-gradient-to-br from-yellow-700 from-10% via-red-600 via-40% to-black to-80% min-h-screen'>
                <h1 className='mx-auto mt-4 text-2xl font-bold text-center px-4 text-white'>Halaman {page}</h1>
                <div className="mt-8 flex flex-wrap justify-center gap-4 lg:gap-8 max-w-[87rem] self-center">
                    {trending.map(item =>(
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
export default AllMoviePage