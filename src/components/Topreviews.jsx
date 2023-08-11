import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Topreviews = () => {

  const [topAnime, setTopAnime] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.jikan.moe/v4/top/reviews',
    };

    Axios.request(options)
      .then(response => {
        // Check if the response contains the 'data' array
        if (response.data.data && Array.isArray(response.data.data)) {
          setTopAnime(response.data.data.slice(0, 3));
          console.log(response.data.data.slice(0, 3))
        } else {
          console.error('Invalid API response:', response.data);
        }
      })
      .catch(error => {
        console.error('API Error:', error);
      });
  }, []);

  return (
    <div className='flex flex-col px-10 pt-20 pb-10'>
        <div className=' flex flex-row items-center justify-between pb-6'>
            <h1 className='text-xs pb-2 md:text-lg'>Top 10 this Month</h1>
            <a className=' text-end text-[8px] text-[#2EAEBE] font-light mb-2 md:text-sm' href='/alltop'>See All</a>
        </div>

        <div className=' flex flex-row items-center justify-center'>
            {topAnime.map(anime => (
            <div className=' w-full h-[200px] text-[12px] font-bold px-1 py-1 rounded-lg md:h-[300px] lg:w-[300px] lg:h-full' key={anime}>
                <img className=' rounded-lg' src={anime.entry.images.jpg.image_url} alt="" />
                <a href={anime.entry.url}>{anime.entry.title}</a>
            
            </div>
            ))}
        </div>
      

    </div>
    
  )
}

export default Topreviews