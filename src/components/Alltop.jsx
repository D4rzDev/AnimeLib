import React, {useState,useEffect} from 'react'
import Axios from 'axios';

const Alltop = () => {
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
    <div className='flex flex-col px-10 pt-20 lg:px-20 md:px-20'>
        <h1 className=' text-center text-xs font-extrabold pb-2 md:text-sm md:pb-10'>Top 10 this Month</h1>
       {/*  <div className=' flex flex-wrap flex-row items-center justify-center gap-4 md:gap-6 lg:w-[200px]'>
            {topAnime.map(anime => (
            <div className=' w-[130px] h-full text-[12px] px-1 py-1 rounded-lg' key={anime}>
                <img className=' rounded-lg' src={anime.entry.images.jpg.image_url} alt="" />
                <a href={anime.entry.url}>{anime.entry.title}</a>
            
            </div>
            ))}
        </div> */}
         <div className='flex flex-wrap items-center justify-center gap-4'>
            {topAnime.map(anime => (
              <div className=' flex flex-col w-[130px] h-full text-[8px] font-bold px-1 py-1 rounded-lg lg:w-[200px]' key={anime}>
                <img className='h-full rounded-lg' src={anime.entry.images.jpg.image_url} alt="" />
                <a className=' text-xs font-bold text-center' href={anime.entry.url} >{anime.entry.title}</a>
                
              </div>
            ))}
          </div>
    </div>
  )
}

export default Alltop