import { useRouter } from 'next/router';
import useFetch from '../../axios/useFetch';
import { Banner, LeadCast, Loading, Recommendation, SidebarContent } from '../../components';
import ScrollToTop from '../../utilities/scrollTop';
import { castContainer, contentContainer, recommendationContainer, sideContentContainer } from '../../constant/pageStyles';


const Movies = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: movieList, loading } = useFetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.MOVIE_DATABASE_ID}&append_to_response=credits,videos`);

  console.log(movieList)

  return (
    <>
      {
        movieList.hasOwnProperty("id") ? (
          <>
           <Banner 
            content={movieList}
            releaseDate={movieList.release_date}
            runtime={movieList.runtime}
            mediaType={'movies'}
           />
            <div className={contentContainer}>
              <div className={castContainer}>
                <LeadCast 
                  casts={movieList.credits.cast}
                />
              </div>
              <div className={sideContentContainer}>
                <SidebarContent
                  isMovie={true}
                  content={movieList}
                />
              </div>
              <div className={recommendationContainer}>
                <Recommendation
                  mediaType={'movie'}
                />
              </div>
            </div>
          </>
        ) : (

          <Loading/>

        )
      }
      <ScrollToTop/>
    </>
  )
}

export default Movies
