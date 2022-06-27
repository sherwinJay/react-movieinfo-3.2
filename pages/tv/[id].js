import { Banner, LeadCast, Loading, Recommendation, SidebarContent } from '../../components';
import ScrollToTop from '../../utilities/scrollTop';
import { castContainer, contentContainer, recommendationContainer, sideContentContainer } from '../../styles/pageStyles';

const TVShows = ({tvList, pageId}) => {

  return (
    <>
      <Head>
        <title>{`TV Page - ${pageId}`}</title>
      </Head>
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
            id={pageId}
          />
        </div>
      </div>
       
      <ScrollToTop/>
    </>
  )
  
}

export async function getServerSideProps(context) {
  const pageId = context.params.id;
  const res = await fetch(`https://api.themoviedb.org/3/tv/${pageId}?api_key=${process.env.MOVIE_DATABASE_ID}&append_to_response=credits,videos`);
  const tvList = await res.json()
  return {
    props: { 
      message: `Next.js is awesome`,
      tvList,
      pageId
    }, // will be passed to the page component as props
  }
}

export default TVShows
