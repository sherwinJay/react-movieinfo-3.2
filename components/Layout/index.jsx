import React from 'react';
import { useState, useEffect } from 'react';
import { Footer, Header, MobileMenu } from '..';


const Layout = ({children}) => {

  const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(prevIsOpen => !prevIsOpen);

  return (
    <>
      <Header 
        toggle={toggle}
        isOpen={isOpen}
      />
      {
        isOpen && <MobileMenu setIsOpen={setIsOpen} />
      }

      { children }
      <Footer/>
    </>
  )
}

export default Layout