import React from 'react'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'
import Trending from './Components/Trending';
import About from './Components/About';
import Contact from './Components/Contact';
import Popular from './Components/Popular';
import Movie from './Components/Movie';
import Tvshows from './Components/TvShows';
import People from './Components/People'
import MovieDetails from './Components/MovieDetails';
function App() {
  return (
    <div className='bg-black w-screen h-screen flex'>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/trending' element ={<Trending/>}/>
        <Route path='/about' element ={<About/>}/>
        <Route path='/contact' element ={<Contact/>}/>
        <Route path='/popular' element ={<Popular/>}/>
        <Route path='/movie' element ={<Movie/>}/>
        <Route path='/movie/details/:id' element ={<MovieDetails/>}/>
        <Route path='/tv' element ={<Tvshows/>}/>
        <Route path='/people' element ={<People/>}/>
      </Routes>
    </div>
  )
}
export default App;