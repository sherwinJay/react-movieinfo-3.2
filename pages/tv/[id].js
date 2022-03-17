import { useRouter } from 'next/router';
import useFetch from '../../axios/useFetch';
import { Banner, LeadCast, Loading, Recommendation, SidebarContent } from '../../components';
import ScrollToTop from '../../utilities/scrollTop';
import { castContainer, contentContainer, recommendationContainer, sideContentContainer } from '../../constant/pageStyles';

const TVShows = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: tvList, loading } = useFetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.MOVIE_DATABASE_ID}&append_to_response=credits,videos`);


  console.log(tvList)
  return (
    <>
      {
        tvList.hasOwnProperty("id") ? (
          <>
            <Banner
              content={tvList}
              releaseDate={tvList.first_air_date}
              runtime={tvList.episode_run_time}
              mediaType={'tv'}
            />
            <div className={contentContainer}>
              <div className={castContainer}>
                <LeadCast 
                  casts={tvList.credits.cast}
                />
              </div>
              <div className={sideContentContainer}>
                <SidebarContent
                  isMovie={false}
                  content={tvList}
                />
              </div>
              <div className={recommendationContainer}>
                <Recommendation
                  mediaType={'tv'}
                />
              </div>
            </div>
          </>
        ) : (

        <Loading />

        )
      }
      <ScrollToTop/>
    </>
  )
}

export default TVShows
