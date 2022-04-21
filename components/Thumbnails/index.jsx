import React from 'react'
import useFetch from '../../axios/useFetch'
import { categoryTitleContainer, thumbnailsContainer, thumbnailsContainer2 } from './styles';
import ThumbItem from './ThumbItem';

const Thumbnails = ({isMovie, categoryTitle, category, template, imgNum}) => {

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
          
          category.hasOwnProperty('results') && category.results.length > 0 ? (
            category.results.slice(0, thumbnailCount).map(thumbnail => (
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
          
        }
      </ul>
    </>
  )
}

export default Thumbnails