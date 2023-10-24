// components
import Navbar from './components/Navbar'

// pages
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Discover from './pages/discover'
import AllMoviePage from './pages/AllMoviePage'
import DetailFilm from './pages/DetailFilm'
import Search from './pages/Search'

// package
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div id='app'>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/discover/:media' element={<Discover/>}></Route>
        <Route path='/trending/all/day' element={<AllMoviePage/>}></Route>
        <Route path='/det/:media/:id' element={<DetailFilm/>}></Route>
        <Route path='/search/:query' element={<Search/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>

    </div>
  )
}

export default App
