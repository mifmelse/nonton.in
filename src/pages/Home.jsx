import { useEffect, useState } from 'react'
import axios from 'axios'

// components
import Carousel from '../components/Carousel'
import Hero from '../components/Hero'
import BackgroundSlide from '../components/BackgroundSlide'

import Card from '../components/Card'


const Home = () => {
    const [trending, setTrending] = useState([])
    const [popular, setPopular] = useState([])
    const [horror, setHorror] = useState([])
    const [animasi, setAnimasi] = useState([])
    const [upcoming, setUpcoming] = useState([])
    const [topRated, setTopRated] = useState([])
    const [tvPopular, setTvPopular] = useState([])

    // console.log(import.meta.env.VITE_TMDB_BASE_URL);

    const CarouselDetail = [
        {
            sid: 'trending',
            title: 'lagi trending nih',
            data: trending,
            component: Card,
        },
        {
            sid: 'popular',
            title: 'rekomendasi film terpopuler',
            data: popular,
            component: Card,
        },
        {
            sid: 'tvpopular',
            title: 'film series juga seru',
            data: tvPopular,
            component: Card,
        },
        {
            sid: 'horror',
            title: 'buat kamu sang pemberani',
            data: horror,
            component: Card,
        },
        {
            sid: 'animasi',
            title: 'film animasi juga seru lhoo',
            data: animasi,
            component: Card,
        },
        {
            sid: 'upcoming',
            title: 'masih baru masih anget',
            data: upcoming,
            component: Card,
        },
        {
            sid: 'toprated',
            title: 'ratingnya tinggi bukan maen',
            data: topRated,
            component: Card,
        },
    ]
    
    const fetchTrending = () =>{
        axios.get(`${import.meta.env.VITE_TMDB_BASE_URL}/trending/all/day`, {
            headers:{
                'Authorization': `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
            },
            params: {
                page: 1,
                include_adult: 'false',
                include_video: 'false',
                language: 'id',
                sort_by: 'popularity.desc'
    
            }
        })
        .then(trending => {
            setTrending(trending.data.results);
        })
        .catch(err => console.log(err))
    }
    const fetchApiTV = () => {
        axios.get(`${import.meta.env.VITE_TMDB_BASE_URL}/tv/popular`,{
            headers:{'Authorization': `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`},
        })
        .then(latest=>{
            setTvPopular(latest.data.results)
        })
    }
    const fetchApiMovie= () => {
        axios.get(`${import.meta.env.VITE_TMDB_BASE_URL}/discover/movie`,{
            headers:{'Authorization': `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`},
            params:{
                page: 1,
                include_adult: 'false',
                include_video: 'false',
                language: 'id',
                sort_by: 'popularity.desc',
            }
        })
        .then(popular=>{
            setPopular(popular.data.results)
        })
        axios.get(`${import.meta.env.VITE_TMDB_BASE_URL}/discover/movie?with_genres=27`,{
            headers:{'Authorization': `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`},
            params:{
                page: 1,
                include_adult: 'false',
                include_video: 'false',
                language: 'id',
                sort_by: 'popularity.desc',
            }
        })
        .then(horror=>{
            setHorror(horror.data.results)
        })
        axios.get(`${import.meta.env.VITE_TMDB_BASE_URL}/discover/movie?with_genres=16`,{
            headers:{'Authorization': `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`},
            params:{
                page: 1,
                include_adult: 'false',
                include_video: 'false',
                language: 'id',
                sort_by: 'popularity.desc',
            }
        })
        .then(animasi=>{
            setAnimasi(animasi.data.results)
        })
        axios.get(`${import.meta.env.VITE_TMDB_BASE_URL}/movie/upcoming`,{
            headers:{'Authorization': `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`},
            params:{
                page: 1,
                language: 'id',
            }
        })
        .then(upcoming=>{
            setUpcoming(upcoming.data.results)
        })
        axios.get(`${import.meta.env.VITE_TMDB_BASE_URL}/movie/top_rated`,{
            headers:{'Authorization': `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`},
            params:{
                page: 1,
                language: 'id',
                sort_by: 'popularity.desc',
            }
        })
        .then(top=>{
            setTopRated(top.data.results)
        })
    }

    useEffect(()=>{
        fetchTrending()
        fetchApiTV()
        fetchApiMovie()
    },[])

    return(
        <div id="home" className='w-full h-full bg-gray-800 relative'>
            <BackgroundSlide/>

            <div className=" absolute top-[60px] w-full h-full">
                <Hero/>
                <div className='bg-gradient-to-b from-transparent from-5% to-black to-10% pb-px cs:pb-4 ps-3 md:px-3 lg:px-8'>
                    {CarouselDetail.map(item =>(
                        <Carousel key={item.sid}
                            sid={item.sid}
                            title={item.title}
                            datanya={item.data}
                            Component={item.component}
                        />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Home;