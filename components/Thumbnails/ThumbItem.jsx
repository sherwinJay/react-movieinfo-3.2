import Image from 'next/image'
import Link from "next/link";
import { thumbnailImgContainer, thumbnailImg, thumbnailInfo, viewBtn, noThumbnail } from './styles';



const ThumbItem = ({title, thumbID, isMovie, overview, rating, backdrop, poster, template}) => {

  const customImg = template === "1" ? poster : backdrop;

  const getImgThumbnail = () => {
    if(poster === null || poster === undefined || poster === "" ) {
      return ( 
        <div className={noThumbnail}>
          <p>No Image</p>
        </div>
      );
    } else {
      return ( 
        <Image
          src={`https://image.tmdb.org/t/p/w780/${customImg}`}
          className={thumbnailImg}
          layout='fill'
          placeholder='blur'
          blurDataURL={`https://image.tmdb.org/t/p/w780/${customImg}`}
          alt={title}
        />
      );
    }
  };

  return (
    <div className={thumbnailImgContainer}>
      {
        getImgThumbnail()
      }
      <div className={thumbnailInfo}>
        <p>
          {title}
        </p>
        <Link href={`/${ isMovie ? 'movies' : 'tv'}/${thumbID}`}>
          <a className={viewBtn} value={thumbID}>
            view info
          </a>
        </Link>
      </div>
    </div>
  )
}

export default ThumbItem 