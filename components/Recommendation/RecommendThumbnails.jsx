import Link from "next/link";
import { noImg, recommendThumbnailInfo, recommendThumbnails, recommendThumbnailsImg, thumbnailTitle } from "./styles";
import Image from 'next/image';

const RecommendThumbnails = ({bgImage, title, id, mediaType, pointerEvent}) => {

  // template for image thumbnails 
  const getThumbnailImg = () => { 
    if(bgImage === '' || bgImage === null){
      return (
        <p className={noImg}>
          NO IMAGE
        </p>
      )
    }else{
      return(
        <Image 
          src={`https://image.tmdb.org/t/p/w300/${bgImage}`} 
          alt={title} 
          onPointerEnter={e => pointerEvent(e)}
          id={bgImage}
          // width={300}
          // height={169}
          layout="fill"
          placeholder='blur'
          blurDataURL={`https://image.tmdb.org/t/p/w300/${bgImage}`}
          className={recommendThumbnailsImg}
        />
      )
    }
  };

  return (
    <Link href={`/${mediaType === "movie" ? "movies" : "tv"}/${id}`}>
      <a>
        <div className={recommendThumbnailInfo}>
          <div className={recommendThumbnails}>
            {getThumbnailImg()}
          </div>
          <p className={thumbnailTitle}>{title}</p>
        </div>
    
      </a>
    </Link>
  )
}

export default RecommendThumbnails