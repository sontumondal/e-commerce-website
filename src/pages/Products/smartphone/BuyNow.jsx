import React, { useEffect } from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom';


const BuyNow = () => {
  const { singleSmartphoneData } = useSelector(state => state.app)
const navigate=useNavigate()
  // console.log(singleSmartphoneData);
  const { title, description, price, discountPercentage, rating, stock, brand, thumbnail } = singleSmartphoneData;

  return (
   <>
 
 <div className="buy-now">
  <div className="buy-image">
  <img src={thumbnail} alt="image" />
  </div>
  <div className="buy-details">
  <p>{title}</p>
  <p>Brand : {brand}</p>
  <p>Price : {price}</p>
  <p>Description : {description}</p>
  <p>Seller : Your Store,Country: India, City: Kolkata</p>
  <p>Payment-method : cash-on-delivery only!</p>
  <NavLink to="/payment">
  <button>Proceed to order/Payment</button>
  </NavLink>
  <button onClick={()=> navigate(-1)}>Back</button>
  </div>
 </div>
 
   
   </>
  )
}

export default BuyNow
