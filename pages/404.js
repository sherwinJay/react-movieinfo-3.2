import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className='not-found-container'>
      <h2>Page Not Found</h2>
      <p>
        Go back to  <Link href={'/'}><a>homepage</a></Link>
      </p>
    </div>
  )
}

export default NotFound