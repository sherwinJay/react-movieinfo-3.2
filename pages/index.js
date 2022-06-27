import React from 'react'
import axios from 'axios';
import Head from 'next/head';
import { Loading, Slider, Thumbnails } from '../components'

const Home = ({ popularMovie, upcomingMovie, nowPlayingMovie, popularTV }) => {
  return (
    <>
      <Head>
        <title>Movie Information</title>
      </Head>
      <Slider 
        category={popularMovie}
        isMovie={false}
      />
      <div className='main-container'>
        {/* Movie Upcoming */}
        <Thumbnails 
          categoryTitle={'Upcoming Movies'}
          isMovie={true}
          category={upcomingMovie}
          imgNum={8}
          template={"1"}
        />
        {/* Now Playing */}
        <Thumbnails
          categoryTitle={'Now Playing'}
          isMovie={true}
          category={nowPlayingMovie}
          imgNum={7}
          template={"2"}
        />
        {/* TV shows */}
        <Thumbnails 
          categoryTitle={'TV Shows'}
          isMovie={false}
          category={popularTV}
          imgNum={8}
          template={"1"}
        />
      </div>
    </>
  )
}

// put server side props here

export async function getServerSideProps(context) {

  const [ 
    popularMovie,
    upcomingMovie,
    nowPlayingMovie,
    popularTV
  ] = await Promise.all([
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_DATABASE_ID}&language=en-US&page=1`).then(res => res.data),
    axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.MOVIE_DATABASE_ID}&language=en-US&page=1`).then(res => res.data),
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.MOVIE_DATABASE_ID}&language=en-US&page=1`).then(res => res.data),
    axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.MOVIE_DATABASE_ID}&language=en-US&page=1`).then(res => res.data),
  ])

  return {
    props: { 
      popularMovie: popularMovie,
      upcomingMovie: upcomingMovie,
      nowPlayingMovie: nowPlayingMovie,
      popularTV: popularTV,

    }, // will be passed to the page component as props
  }
}

export default Home;