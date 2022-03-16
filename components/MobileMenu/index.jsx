import React from 'react'
import SearchShow from '../Search'
import { closeContainer, mobileMenuContainer } from './styles'
import CloseIcon from '@mui/icons-material/Close';

const MobileMenu = ({setIsOpen}) => {
  return (
    <div className={mobileMenuContainer}>
      <div className={closeContainer}>
        <CloseIcon onClick={ () => setIsOpen(false) } />
      </div>
      <SearchShow setIsOpen={setIsOpen} />
    </div>
  )
}

export default MobileMenu