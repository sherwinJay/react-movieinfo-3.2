import React from 'react'
import router from "next/router";
import { useEffect, useState } from "react";
import RecommendThumbnails from './RecommendThumbnails';
import useFetch from "../../axios/useFetch";
import { recommendationTitle, recommendContainer, recommendThumbnailContainer } from './styles';


const Recommendation = ({mediaType, id}) => {
  // const { id } = router.query;
  const { data } = useFetch(`https://api.themoviedb.org/3/${mediaType}/${id}/recommendations?api_key=${process.env.MOVIE_DATABASE_ID}&language=en-US&page=1`);
  const [background, setBackground] = useState('');

  useEffect(() => {
    // set recommendation background to the first show data on the array
    // checks first if the data has obj property of 'results'
    data?.results && setBackground(`https://image.tmdb.org/t/p/original${data?.results[0]?.backdrop_path}`)
  }, [data])

  // change background when hovering to the recommendation thumbnails
  const pointerEvent = (e) => {
    if(background){
      setTimeout(() => {
        setBackground(`https://image.tmdb.org/t/p/original${e.target.id}`)
      }, 200)
    }
  }

  // inline style for the recommendation container
  const recommendationBg = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3)), url(${background})`,
    backgroundSize: 'cover',
  }


  return (
    <div className={recommendContainer} style={recommendationBg}>
      <h2 className={recommendationTitle}>Recommendations</h2>
      <div className={recommendThumbnailContainer}>
        {
          data.hasOwnProperty('results') && data.results.length !== 0 ? (
            data.results.slice(0,7).map(item => (
              <RecommendThumbnails
                key={item.id}
                bgImage={item.backdrop_path}
                title={mediaType === "movie" ? item.title : item.name}
                id={item.id}
                mediaType={mediaType}
                pointerEvent={pointerEvent}
              />
            ))
          ) : (
            <p>No Recommendations</p>
          )
        }
      </div>
    </div>
  )
}

export default Recommendation