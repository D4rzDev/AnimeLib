import React, { useState, useEffect} from 'react'
import Axios from 'axios';
import {BsPlay} from 'react-icons/bs'

const Allrecommended = () => {

    const [topAnime, setTopAnime] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const animesPerPage = 10;

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.jikan.moe/v4/recommendations/anime',
    };

    Axios.request(options)
      .then(response => {
        if (response.data.data && Array.isArray(response.data.data)) {
          setTopAnime(response.data.data);
          console.log(response.data.data)
        } else {
          console.error('Invalid API response:', response.data);
        }
      })
      .catch(error => {
        console.error('API Error:', error);
      });
  }, []);

  const indexOfLastAnime = currentPage * animesPerPage;
  const indexOfFirstAnime = indexOfLastAnime - animesPerPage;
  const currentAnimes = topAnime.slice(indexOfFirstAnime, indexOfLastAnime);

  return (
    <div className='flex flex-col px-10 pt-20 pb-20 lg:px-20 '>
      <h1 className='text-xs text-center pb-10 font-extrabold lg:text-sm lg:text-center lg:pb-10'>Recommendations</h1>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        {currentAnimes.map(anime => (
          <div className=' flex flex-col w-[130px] h-full text-[8px] font-bold px-1 py-1 rounded-lg lg:w-[200px]' key={anime.entry[0].mal_id}>
            <img className='h-full rounded-lg' src={anime.entry[0].images.jpg.image_url} alt="" />
            <a className=' text-xs font-bold text-center' href={anime.entry[0].url} >{anime.entry[0].title}</a>
            <a className=' flex flex-row items-center justify-center rounded-lg bg-[#90939B] mt-2 py-1' href={anime.entry[0].url}><BsPlay size={20}/> Watch Now</a>
          </div>
        ))}
      </div>
      <div className='flex justify-center gap-4 pt-10'>
        {Array.from({ length: Math.ceil(topAnime.length / animesPerPage) }).map((_, index) => (
          <button
            key={index}
            className='text-[8px] text-[#2EAEBE] font-light md:text-[12px] lg:text-[16px]'
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Allrecommended