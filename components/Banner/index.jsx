import { crewDepartment, crewWrapper, iconWrapper, bannerContainer, bannerInfo, moviePoster, noMoviePoster, ratingContainer, taglineContainer, releaseDateContainer, bannerBg2, overviewContainer } from "./styles";
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import Image from 'next/image';
import { useCircleRating } from "../../constant";

const Banner = ({content, mediaType, releaseDate}) => {
  const {
    id,
    backdrop_path: backdrop,
    poster_path: poster,
    title,
    tagline,
    overview,
    popularity,
    vote_average: rating,
    runtime,
    episode_run_time: episodeTime,
    genres,
    credits,
    created_by: creators,
    videos,
  } = content;

  const { circleBorder } = useCircleRating(rating);

  // inline styles
  const bannerBg = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(https://image.tmdb.org/t/p/original/${backdrop})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
  };
  // end of inline styles

  const modifiedReleaseDate = releaseDate !== null ? releaseDate.replace(/-/g,'/') : '';
  const showGenres = genres.map((genre) => genre.name).slice(0,3).toString().replace(/,/g,', ');

  const getImgPoster = () => {
    if(poster === null || poster === undefined || poster === "" ) {
      return ( 
        <div className={noMoviePoster}>
          <p>No Image</p>
        </div>
      );
    } else {
      return ( 
        <Image className={moviePoster} 
          src={`https://image.tmdb.org/t/p/w342${poster}`} 
          alt={title}
          width={280}
          height={420}
          placeholder='blur'
          blurDataURL={`https://image.tmdb.org/t/p/w342${poster}}`} 
        />
      );
    }
  };

  const computeRuntime = () => {
    const computeHours = Math.floor((mediaType === 'movies' ? runtime : episodeTime[0]) / 60);
    const computeMinutes = (mediaType === 'movies' ? runtime : episodeTime[0]) % 60;

    return computeHours >= 1 ? `${computeHours}h ${computeMinutes}m` : `${computeMinutes}m`;
  };

  const getTrailer = () => {
    if(videos.results.length > 0 && videos.results[0].hasOwnProperty("key")){
      return (
        <a  
          href={`https://www.youtube.com/watch?v=${videos.results[0].key}`}
          className={ratingContainer}
          target="_blank"
        >
          <PlayCircleFilledWhiteIcon/>
          Play Trailer
        </a>
      )
    }
    return "";
  }

  const getCrew = credits.crew.map((crew) => {
    if(crew.job === "Director" || crew.job === "Screenplay"){
      return (
        <li key={crew.credit_id}>
          <p>{crew.name}</p>
          <p css={crewDepartment}>{crew.job}</p>
        </li>
      )
    }
    return "";
  });

  const getCreator = creators?.length > 0 ? creators?.map((creator) => {
    return (
      <li key={creator.credit_id}>
        <p>{creator.name}</p>
        <p css={crewDepartment}>Creator</p>
      </li>
    )
  }) : '';

  return (
    <div style={bannerBg} className={bannerBg2}>
      <div className={`main-container ${bannerContainer}`}>
        {
          getImgPoster()
        }
        <div className={bannerInfo}>
          <h2>{title}</h2>
          <p>
            <span className={releaseDateContainer} >
              {`${modifiedReleaseDate} (US)`}
            </span>
            {` | ${showGenres}`}
          </p>
          <div className={iconWrapper}>
            <div className={ratingContainer}>
              <span style={circleBorder}>
                {rating.toFixed(1)}
              </span>
              <span>
                User<br/>Rating
              </span>
            </div>
            <span className={ratingContainer}>
              <WatchLaterIcon/>
              {computeRuntime()}
            </span>
            {
              getTrailer()
            }
          </div>
          <p className={taglineContainer}>{tagline}</p>
          <p className={overviewContainer}>{overview}</p>
          <ul className={crewWrapper}>
            {
              mediaType === 'movies' ? getCrew : getCreator
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Banner