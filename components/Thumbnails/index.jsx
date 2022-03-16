import React from 'react'
import useFetch from '../../axios/useFetch'
import { categoryTitleContainer, thumbnailsContainer, thumbnailsContainer2 } from './styles';
import ThumbItem from './ThumbItem';

const Thumbnails = ({isMovie, categoryTitle, category, template, imgNum}) => {

  const movieURL = `https://api.themoviedb.org/3/movie/${category}?api_key=${process.env.MOVIE_DATABASE_ID}&language=en-US&page=1`;
  const tvURL = `https://api.themoviedb.org/3/tv/${category}?api_key=${process.env.MOVIE_DATABASE_ID}&language=en-US&page=1`;

  const { data, loading } = useFetch( isMovie ? movieURL : tvURL );

  // console.log(data)

  const getCategoryTitle = () => {
    return category.toLowerCase().replace(/_/g, " ");
  }

  // make string number to whole number
  const thumbnailCount = parseInt(imgNum);

  return (
    <>
      <p className={categoryTitleContainer}>{categoryTitle}</p>
      <ul className={ template === "1" ? thumbnailsContainer : thumbnailsContainer2 }>
        {  
          loading ? (
            "loading"
          ) : (
            data.hasOwnProperty('results') && data.results.length > 0 ? (
              data.results.slice(0, thumbnailCount).map(thumbnail => (
                <li key={thumbnail.id}>
                  <ThumbItem 
                    title={ isMovie ? thumbnail.title : thumbnail.name}
                    thumbID={thumbnail.id}
                    overview={thumbnail.overview}
                    rating={thumbnail.vote_average}
                    backdrop={thumbnail.backdrop_path}
                    poster={thumbnail.poster_path}
                    template={template}
                    isMovie={isMovie}
                  />
                </li>
                )
              )
            ) : (
              <li>
                No Movies to show
              </li>
            )
          )
        }
      </ul>
    </>
  )
}

export default Thumbnails