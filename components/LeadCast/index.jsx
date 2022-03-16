import Image from 'next/image';
import { castName, castNameContainer, castContainer, noCastImg, noCast, castImgContainer, leadCastTitle } from './styles';


const LeadCast = ({ casts }) => {

  const getCast = casts?.slice(0,7).map((cast) => {
        
    let castImage;

    if (cast.profile_path === null){
      castImage = <div className={noCastImg}><p>No Image</p></div>
    } else {
      castImage = <Image
        src={`https://image.tmdb.org/t/p/w154/${cast.profile_path}`} 
        alt={cast.name}
        width={154}
        height={231}
        // layout='fill'
        placeholder='blur'
        blurDataURL={`https://image.tmdb.org/t/p/w154/${cast.profile_path}`}
        // className={castImage}
      />
    }

    return (
      <li key={cast.credit_id}>
        <div className={castImgContainer} >
          { castImage }	
        </div>
        <div className={castNameContainer}>
          <p className={castName}>{cast.name}</p>
          <p>{cast.character}</p>
        </div>
      </li>
    );
  });

  return (
    <>
      <h2 className={leadCastTitle}>Lead Casts</h2>
      <ul className={castContainer}>
        {
          casts.length > 0 ? (
            getCast
          ) : (
            <li className={noCast}>No Casts</li>
          )
        }
      </ul>
    </>
  )
}

export default LeadCast