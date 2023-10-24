import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Pagination from "../components/Pagination"
import Card from "../components/Card"

const Search = () => {

    const [search, setSearch] = useState([])
    const [page, setPage] = useState(1)

    const {query} = useParams()

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_TMDB_BASE_URL}/search/multi?query=${query}&page=${page}`,{
            headers: {
                'Authorization': `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
            }
        }).then(response => {
            setSearch(response.data.results)
            console.log(response.data.results)
        })
    },[page, query])

    return (
        <div>
            <div className='flex flex-col pt-16 pb-10 bg-gradient-to-br from-gray-600 from-10% to-black to-80% min-h-screen'>
                <h1 className='mx-auto mt-4 text-2xl font-bold text-center px-4 text-white'>Halaman: {page}</h1>
                <div className="mt-8 flex flex-wrap justify-center gap-4 lg:gap-8 max-w-[87rem] self-center">
                    {search && search.map(item =>(
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
export default Search