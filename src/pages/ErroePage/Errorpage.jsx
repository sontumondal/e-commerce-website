import React from 'react'
import { Link } from 'react-router-dom'

const Errorpage = () => {
  return (
    <>

    <div className="error">
      <h1>Oops!</h1>
      <h4>404 -  PAGE NOT FOUND</h4>
      <p>The page you are looking for might have been removed had its name changed or its temporarily unavailable</p>
      <Link to="/home">
      <button>Back</button>
      </Link>
    </div>
     
    </>
  )
}

export default Errorpage
