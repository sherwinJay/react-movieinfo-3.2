import { Banner, LeadCast, Loading, Recommendation, SidebarContent } from '../../components';
import ScrollToTop from '../../utilities/scrollTop';
import { castContainer, contentContainer, recommendationContainer, sideContentContainer } from '../../styles/pageStyles';
import Head from 'next/head';


const Movies = ({movieList, pageId}) => {

  return (
    <>
       <Head>
        <title>{`Movies Page - ${pageId}`}</title>
      </Head>
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
  const res = await fetch(`https://api.themoviedb.org/3/movie/${pageId}?api_key=${process.env.MOVIE_DATABASE_ID}&append_to_response=credits,videos`);
  const movieList = await res.json()
  return {
    props: { 
      message: `Next.js is awesome`,
      movieList,
      pageId
    }, // will be passed to the page component as props
  }
}

export default Movies
