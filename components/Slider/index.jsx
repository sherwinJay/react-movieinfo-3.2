
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import useFetch from '../../axios/useFetch';
import { bannerWrapper, movieDetails, movieOverview, movieTitle, trailer } from './styles';
import Link from 'next/link';


const Slider = ({category, isMovie}) => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  // const { data: movieList } = useFetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${process.env.MOVIE_DATABASE_ID}&language=en-US&page=1`);
  // const { data: tvList, loading } = useFetch(`https://api.themoviedb.org/3/tv/${category}?api_key=${process.env.MOVIE_DATABASE_ID}&language=en-US&page=1`);
  // const dataList = isMovie ? movieList : tvList;

  // console.log(dataList)
 
  return (
    category.hasOwnProperty("results") ? (
      <AutoplaySlider 
        className={bannerWrapper}
        animation="fallAnimation"
        play={true}
        cancelOnInteraction={false}
        interval={6000}
        bullets={true}
        alt={movieTitle}
      >
        { 
          category?.results?.slice(0,5).map((movie) => {
            return (
              <div key={movie.id} 
                data-src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              >
                <h2 className={`${movieTitle} ${movieDetails}`}>
										{movie.title}
									</h2>
									<p className={`${movieOverview} ${movieDetails}`}>
										{movie.overview}
									</p>
									<Link href={`/movies/${movie.id}`}>
                    <a className={trailer}>
										  See Information
                    </a>
									</Link>  
              </div>
            );
          })
        }
      </AutoplaySlider>
    ) : (
      // if data is not yet loaded
      <div className={bannerWrapper}></div>
    )
  )
}

export default Slider;