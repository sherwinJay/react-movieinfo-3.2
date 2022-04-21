import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { displayContent, formContainer, inputStyle, mediaType, movieListContainer, noResult } from './styles';

const SearchShow = ({isOpen, setIsOpen}) => {
  const [searchVal, setSearchVal] = useState("");
  const [movieList, setMovielist] = useState([]);
  const [focus, setFocus] = useState(false);
  const isMobile = setIsOpen ? true : false;
  // const { data: showList } = useFetch(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.MOVIE_DATABASE_ID}&language=en-US&query=${searchVal}&page=1&include_adult=false`)
  
  useEffect(() => {
    
    const movieApi = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.MOVIE_DATABASE_ID}&language=en-US&query=${searchVal}&page=1&include_adult=false`;
    
    const fetchData = async () => {
      const result = await axios.get(movieApi);
      if(searchVal.length < 2) {
        setMovielist([]);    
      } else{
        setMovielist(result.data.results);
      }
    }

    if(searchVal.length > 0){
      fetchData();
    }

    // if(searchVal.length < 2) {
    //   setMovielist([]);    
    // } else {
    //   setMovielist(showList?.results);
    // }
    return () => {
      setMovielist([])
    }
  },[searchVal]);

  const _onBlur = () => {
    setTimeout(() => {
      if (focus) {
        setFocus(false);
        setSearchVal("");
      }
    },1000);
  };

  const _onFocus = () => {
    if (!focus) {
      setFocus(true);
    }
  };

  const getSearch = (e) => {
    setSearchVal(e.target.value);
  };

  const showMovieList = movieList.filter(data => data.media_type !== "person").slice(0,9).map((movie) => {
    return (
      <li key={movie.id}>
        <Link href={`/${movie.media_type === 'movie' ? 'movies' : 'tv'}/${movie.id}`}>
          <a 
            onClick={() => {
              isMobile && setIsOpen(false);
              return setSearchVal('')
            }}
          >
            {movie.media_type === 'movie' ? movie.title : movie.name}
            <p className={mediaType}>
              {movie.media_type}
            </p>
          </a>
        </Link>
      </li>
    )   
  });

  const noMovie = () => {
    return (
      <li className={noResult}>NO RESULT</li>
    )
  };

  const searchList = movieList.length > 0 ? showMovieList : noMovie();

  return (
    <form className={formContainer}>
      <input type="text" 
        placeholder="search" 
        value={searchVal} 
        onChange={getSearch}
        className={inputStyle}
        onBlur={_onBlur}
        onFocus={_onFocus}
      />
      <ul className={`${movieListContainer} ${displayContent(focus && searchVal.length > 1)}`}>
        {searchList}
      </ul>
    </form>
  )
}

export default SearchShow