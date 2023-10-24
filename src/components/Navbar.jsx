//logo
import Logo from '../assets/img/logo.png'

import { useEffect, useState } from 'react';
import {TfiMenu, TfiClose} from 'react-icons/tfi'
import {BsSearch} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';


const Navbar = () => {
    const [show, setShow] = useState(true);
    const [toggleNav, setToggleNav] = useState(true);
    const [searchInput, setSearchInput]= useState('')

    const navigate = useNavigate();

    const handleSearch = ()=> {
        navigate(`/search/${searchInput}`, {query: searchInput});
    }

    const handleNav = () => {
        setToggleNav(!toggleNav);
        console.log(toggleNav);
    }
    
    const scrollNav = () =>{
        const currentPosition = window.scrollY;
        setShow(currentPosition < 20)
    }
    useEffect(() => {
        addEventListener('scroll', scrollNav)
        return() => {
            removeEventListener('scroll', scrollNav)
        }
    }, [])

    const listMenu = [
        {name: 'movie', to: '/discover/movie'},
        {name: 'series', to: '/discover/tv'},
        {name: 'genre', to: '/genre'},
    ]

    return(
        <div style={{top: show? '0' : '-60px'}} className='bg-gray-500/30 flex justify-between text-white items-center px-3 w-full max-w-[1240p] h-16 fixed top-0 z-50 ease-in-out duration-500'>
            <div className='me-6 w-[20%] flex items-center uppercase font-bold text-3xl text-yellow-300 text-shadow-sm shadow-black'>
                <img src={Logo} alt="klise film" className='w-14' />
                <a href="/">nonton.in</a>
            </div>

            <form className='me-4 w-[60%] lg:flex rounded-md overflow-hidden border border-gray-400 hidden text-black'>
                <input onChange={(e)=>setSearchInput(e.target.value)} type="text" placeholder='Cari Film...' className='p-2 w-full'/>
                <button type="submit" className='bg-yellow-400 p-3 font-semibold' onClick={handleSearch}><BsSearch size={20}/></button>
            </form>

            <ul className='hidden lg:flex w-[20%] justify-center'>
                {listMenu.map((navmenu, index) => (
                    <li key={index} className='m-4 cursor-pointer font-bold uppercase'>
                        <a className='text-shadow shadow-black hover:text-yellow-300' href={navmenu.to}>{navmenu.name}</a>
                    </li>
                ))}
            </ul>
            <div className='sm:block lg:hidden' onClick={handleNav}>
                <TfiMenu size={26}/>
            </div>
            <div 
                className={
                    !toggleNav ?
                    'fixed right-0 top-0 w-screen bg-gray-800 h-full flex flex-col ease-in-out duration-700 lg:hidden'
                    :
                    'fixed right-[-100%]'

                    // !toggleNav ? 'fixed left-0 top-0 w-[60%] bg-gray-800 h-full ease-in-out duration-700 sm:hidden' : 'fixed left-[-100%]'
                }
            >
                <div className="flex items-center justify-between m-3">
                    <a href="/" className='flex mx-auto items-center text-3xl font-bold uppercase text-yellow-300 text-shadow-sm shadow-black'>
                        <img src={Logo} alt="klise film" className='w-14' />
                        <h1>nonton.in</h1>
                    </a>
                    <div onClick={handleNav}>
                        <TfiClose size={26}/>
                    </div>
                </div>

                <form className="flex mx-8 my-4 rounded-md overflow-hidden border border-gray-400 text-black">
                    <input onChange={(e)=>setSearchInput(e.target.value)} type="text" placeholder='Cari Film...' className='w-full p-2'/>
                    <button type='submit' className='bg-yellow-400 p-3 font-semibold' onClick={handleSearch}><BsSearch size={20}/></button>
                </form>
                
                <ul className='p-4 uppercase'>
                    {listMenu.map((navmenu, i) => (
                        <li key={i} className='p-4 border-b border-b-gray-500 hover:bg-white/20'><a href={navmenu.to}>{navmenu.name}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navbar;