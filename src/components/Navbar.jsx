import React, {useState} from 'react'
import {RiMenu5Line, RiCloseLine} from 'react-icons/ri'

const Navbar = () => {

  const [nav, setNav] = useState();

  const handleNav = () => {
    setNav(!nav);
  }
  return (
    <nav className=' fixed w-screen top-0 left-0 z-10'>
        <div className=' flex flex-row items-center justify-between px-10 py-6 bg-[#1B1E26] lg:px-20 '>
            <a href='/main' className=' text-sm font-extrabold'>anime.lib</a>
            <div className='' onClick={handleNav}>
              {!nav ?    <RiMenu5Line size={25}/> :  <RiCloseLine size={25}/> }
            </div>
           
        </div>

        <ul className={ !nav ? 'hidden' : ' flex flex-col items-center justify-center gap-4 text-xs font-extrabold w-screen py-10'}>
          <a href="/alltop">Top Anime</a>
          <a href="">Recent Episodes</a>
          <a href="/allrec">Recommendations</a>
        </ul>
    </nav>
  )
}

export default Navbar