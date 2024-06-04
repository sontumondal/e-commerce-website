
import {  useSelector } from 'react-redux'
import CartItem from './CartItem'
import { NavLink, useNavigate } from 'react-router-dom'
import { memo } from 'react'


const Cart = () => {
  const { cart, totalAmount } = useSelector((state) => state.allcart)
  // console.log("carttt", cart
  // );
const nevigate=useNavigate()
  return (
    <>
      <div className="cartcontainer">
        <div className="cartHeading">
          <p>Item</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <div className="itemdivider"></div>
        {cart.length === 0 && (<p style={{color:"white",textAlign:"center",fontSize:"1.5rem"}}>Your cart is empty</p>)}
        <div className="cartItem">
          {cart.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
      <div className="continueShoping">
       
      <NavLink to="/product"><button>Continue-Shoping</button></NavLink>
        <button onClick={()=>nevigate(-1)}>Back-to-Product</button>
      </div>
           <div className="sub-total">

           <p>Total-Item : ( {cart.length} )</p>
          <p>Sub-Total-Price : {totalAmount} /-</p>
          <span style={{color:"white"}}>cash-on-delivery-only</span>
          <NavLink to="/payment">
         <button >Order-Now</button>
          </NavLink>

           </div>
      </div>

    </>
  )
}

export default memo(Cart)
