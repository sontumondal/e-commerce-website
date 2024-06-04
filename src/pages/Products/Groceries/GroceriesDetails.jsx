import React from 'react'
import {NavLink} from "react-router-dom"

const GroceriesDetails = ({ id, title, thumbnail }) => {
  return (
    <>
      <NavLink to={`/singlesmartphone/${id}`} >
                    <div className="imagecontainer">
                    <img src={thumbnail} alt={title} className="iamgephone"/>
                    <div className="overlayphone">
                        <div className="texttitle">{title}</div>
                    </div></div>
                </NavLink>
    </>
  )
}

export default GroceriesDetails
