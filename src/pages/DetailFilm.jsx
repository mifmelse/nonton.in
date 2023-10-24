import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Trailer from "../components/trailer"

const DetailFilm = () => {
    const {id, media} = useParams()
    const [detailFilm, setDetailFilm] = useState({})
    const [genres, setGenres] = useState([])
    const [crew, setCrew] = useState([])

    const fetchDetailfilm = async ()=> {
        await axios.get(`${import.meta.env.VITE_TMDB_BASE_URL}/${media}/${id}`,{
            headers: {
                'Authorization': `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
            },
        })
        .then(response => {
            setDetailFilm(response.data)
        })
    }

    const fetchGenre = async ()=> {
        await axios.get(`${import.meta.env.VITE_TMDB_BASE_URL}/${media}/${id}`,{
            headers: {
                'Authorization': `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
            },
        })
        .then(response => {
            setGenres(response.data.genres)
        })
    }

    const fetchCredit = async () => {
        await  axios.get(`${import.meta.env.VITE_TMDB_BASE_URL}/movie/${id}/credits`,{
            headers: {
                'Authorization': `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
            }
        }).then(response => {
            setCrew(response.data.crew);
        })
    }

    // genre
    const genre = genres.map(item => item.name).join(', ')

    // creator
    const creator = crew.find(creator => creator.job === "Director")
    
    useEffect(()=>{
        fetchDetailfilm()
        fetchGenre()
        fetchCredit()
    },[])

    return (
        // bg-black
        <div className="flex min-h-screen justify-center items-center bg-black/90">
            <div 
                style={{backgroundImage: `url(${import.meta.env.VITE_TMDB_IMAGE}${detailFilm.backdrop_path})`, backgroundPosition: 'top 0px right -250px'}} 
                className="bg-gray-500 bg-blend-multiply bg-no-repeat bg-cover md:rounded-sm 2xl:rounded-3xl ms:rounded-none overflow-hidden"
            >
                <div className="ms:mt-20 w-full max-w-screen-2xl flex flex-col sm:flex-row items-center md:items-start md:p-4 xl:p-8 xl:items-center 2xl:p-0 justify-center text-white">
                    <div className="ms:w-[85%] md:w-2/5 2xl:w-1/3 md:rounded-md 2xl:rounded-none overflow-hidden">
                        <img className="bg-cover w-full" src={`${import.meta.env.VITE_TMDB_IMAGE}${detailFilm.poster_path}`} alt="poster film" />
                    </div>
                    <div className="flex flex-col ms:w-full w-2/3 px-8">
                        <div className="my-4 xl:my-2">
                            <div className="ms:text-2xl text-sm sm:text-4xl font-bold uppercase mb-1">
                                {detailFilm.title? detailFilm.title : detailFilm.name}
                            </div>
                            <div>
                                <span className="border border-white px-1 me-1">Genres</span>
                                <span>{genre}</span>
                            </div>
                        </div>
                        <div className="my-4 xl:my-2 ">
                            <div className="text-xl font-bold mb-1">OVERVIEW</div>
                            <div>{detailFilm.overview}</div>
                        </div>
                        <div className="my-4 xl:my-2">
                            <div className="text-xl font-bold">Creator</div>
                            <div>
                                {
                                    detailFilm.created_by ? detailFilm.created_by.map(item => item.name).join(', ') : 
                                    creator ? creator.name : 'Not Found'
                                }
                            </div>
                        </div>
                        <div className="my-4 xl:my-2">
                            <div className="text-xl font-bold mb-4">TRAILER</div>
                            <Trailer media={media} id={id}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailFilm