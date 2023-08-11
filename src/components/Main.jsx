import React from 'react'
import Topreviews from './Topreviews'
import Recentepisodes from './Recentepisodes'
import Recommended from './Recommended'

const Main = () => {
  return (
    <div className=' md:px-20 '>
    <Topreviews/>
    <Recentepisodes/>
    <Recommended />
    </div>
  )
}

export default Main