import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {BsPlay} from 'react-icons/bs'

const Recommended = () => {
  const [topAnime, setTopAnime] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.jikan.moe/v4/recommendations/anime',
    };

    Axios.request(options)
      .then(response => {
        if (response.data.data && Array.isArray(response.data.data)) {
          setTopAnime(response.data.data.slice(0, 10));
          console.log(response.data.data)
        } else {
          console.error('Invalid API response:', response.data);
        }
      })
      .catch(error => {
        console.error('API Error:', error);
      });
  }, []);


  return (
    <div className='flex flex-col px-10 pt-10 pb-10 '>
        <div className=' flex flex-row items-center justify-between pb-6'>
            <h1 className='text-xs pb-2 md:text-lg'>Recommendations</h1>
            <a className=' text-end text-[8px] md:text-sm text-[#2EAEBE] font-light mb-2' href='/allrec'>See All</a>
        </div>
     
      <div className='flex flex-wrap items-center justify-center gap-4'>
        {topAnime.map(anime => (
          <div className=' flex flex-col w-[130px] h-full text-[8px] font-bold px-1 py-1 rounded-lg md:w-[120px] lg:w-[200px]' key={anime.entry[0].mal_id}>
            <img className='h-[150px] rounded-lg lg:h-[250px]' src={anime.entry[0].images.jpg.image_url} alt="" />
            <a className=' text-xs font-bold text-center' href={anime.entry[0].url} >{anime.entry[0].title}</a>
            <a className=' flex flex-row items-center justify-center rounded-lg bg-[#90939B] mt-2 py-1' href={anime.entry[0].url}><BsPlay size={20}/> Watch Now</a>
          </div>
        ))}
        </div>
    </div>
  );
};

export default Recommended;
