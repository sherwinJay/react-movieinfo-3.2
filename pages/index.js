import React from 'react'
import { Loading, Slider, Thumbnails } from '../components'

const Home = () => {
  return (
    <>
      <Slider 
        category="popular"
        isMovie={false}
      />
      <div className='main-container'>
        {/* Movie Upcoming */}
        <Thumbnails 
          categoryTitle={'Upcoming Movies'}
          isMovie={true}
          category="upcoming"
          imgNum={8}
          template={"1"}
        />
        {/* Now Playing */}
        <Thumbnails
          categoryTitle={'Now Playing'}
          isMovie={true}
          category="now_playing"
          imgNum={7}
          template={"2"}
        />
        {/* TV shows */}
        <Thumbnails 
          categoryTitle={'TV Shows'}
          isMovie={false}
          category="popular"
          imgNum={8}
          template={"1"}
        />
      </div>
    </>
  )
}

export default Home