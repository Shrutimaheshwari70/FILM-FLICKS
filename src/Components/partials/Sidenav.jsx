import React from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {
  return (
    <div className='w-[20%] h-full border-r-2 border-zinc-400 p-8'>
      <h1 className='text-xl text-white font-bold'> <i className="text-[#C61B1B] ri-tv-fill mr-2"></i>
        <span className='text-xl'>Movie App.</span>
      </h1>
      <nav className='flex flex-col text-zinc-400 text-lg gap-2'>
        <h1 className='text-white font-semibold text-xl mt-5 mb-2'>New Feeds</h1>

        <Link to='/trending' className="hover:bg-[#C61B1B] hover:text-white duration-300 rounded-lg p-4"><i className="mr-2 ri-fire-fill"></i>Trending</Link>

        <Link to='/popular' className="hover:bg-[#C61B1B] hover:text-white duration-300 rounded-lg p-4"><i className="mr-2 ri-bard-fill"></i>Popular</Link>

        <Link to="/movie" className="hover:bg-[#C61B1B] hover:text-white duration-300 rounded-lg p-4"><i className="mr-2 ri-movie-2-fill"></i>Movies</Link>

        <Link to='/tv' className="hover:bg-[#C61B1B] hover:text-white duration-300 rounded-lg p-4"><i className="mr-2 ri-tv-2-fill"></i>Tv Shows</Link>

        <Link to="people" className="hover:bg-[#C61B1B] hover:text-white duration-300 rounded-lg p-4"><i className="mr-2 ri-team-fill"></i>People</Link>
      </nav>
      <hr className='border-none h-[1px] bg-zinc-400' />
      <nav className='flex flex-col text-zinc-400 text-lg gap-1'>
        <h1 className='text-white font-semibold text-xl mt-2 mb-1'>Website Information</h1>

        <Link to='/about'className="hover:bg-[#C61B1B] hover:text-white duration-300 rounded-lg p-4"><i className="mr-2 ri-information-fill"></i>About Us</Link>

        <Link to='/contact'className="hover:bg-[#C61B1B] hover:text-white duration-300 rounded-lg p-4"><i className="mr-2 ri-contacts-fill"></i>Contact Us</Link>

      </nav>
    </div>
  )
}

export default Sidenav