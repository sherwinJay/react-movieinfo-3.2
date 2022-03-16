import React from 'react'
import CachedIcon from '@mui/icons-material/Cached';
import { loadingContainer, loadingIcon } from './styles';

const Loading = () => {
  return (
    <div className={loadingContainer}>
      <CachedIcon className={loadingIcon}/>
      LOADING
    </div>
  )
}

export default Loading