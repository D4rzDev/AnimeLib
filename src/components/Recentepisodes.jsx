import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { BsPlay} from 'react-icons/bs'

const Recentepisodes = () => {

    const [episode, recentEpisode] = useState([]);

    useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.jikan.moe/v4/watch/episodes',
    };

    Axios.request(options)
      .then(response => {
        if (response.data.data && Array.isArray(response.data.data)) {
          recentEpisode(response.data.data.slice(0, 4));
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
    <div className='flex flex-col px-10 '>
         <div className=' flex flex-row items-center justify-between pb-6'>
            <h1 className='text-xs pb-2 md:text-lg'>Recent Episodes</h1>
           
        </div>

        <div className='flex flex-wrap items-center justify-center'>
        {episode.map(anime => (
          <div className=' flex flex-col w-[130px] h-[250px] text-[12px] mx-2 font-bold md:w-[110px] lg:h-[500px] lg:w-[260px]' key={anime.entry.mal_id}>
            <img className=' rounded-lg' src={anime.entry.images.jpg.image_url} alt="" />
            <a className='  font-bold text-center'>{anime.entry.title}</a>
            <a className='  font-bold text-center' href={anime.episodes[0].url} >{anime.episodes[0].title}</a>
            
          </div>
        ))}
        </div>

    </div>
  )
}

export default Recentepisodes