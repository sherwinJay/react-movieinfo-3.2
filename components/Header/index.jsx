import Link from 'next/link'
import React from 'react'
import SearchShow from '../Search'
import { mainHeader, mainHeaderContainer, mainLogo, mobileMenu, searchContainer } from './styles'
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({isOpen, toggle}) => {
  return (
    <div className={mainHeaderContainer}>
      <div  className={mainHeader}>
        <Link href={'/'}>
          <a className={mainLogo}>
            MovieInfo
          </a>
        </Link>
        <div className={searchContainer}>
          <SearchShow />
        </div>
        <div className={mobileMenu} >
          <MenuIcon onClick={ () => toggle() } />
        </div>
      </div>
    </div>
  )
}

export default Header