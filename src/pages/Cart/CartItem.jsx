import React from 'react'
// import { FaMinus ,FaPlus} from 'react-icons/fa';
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeItem } from '../../features/cartSlice';


const CartItem = ({id,image,title,price,amount}) => {
    // const [instock,setInstock]=useState(amount)
    const dispatch=useDispatch()
    // const decrese=()=>{
    //     instock > 1 ? setInstock(instock - 1) : setInstock(1);
    //     // amount+1
    // }
    // const increase=()=>{
    //     instock < amount ? setInstock(instock + 1) : setInstock(amount)
    //     // amount-1;
    // }
  
   
  return (
    <>
    <div className="cartItemPage">
      <div className="thumbtitle">
        <img src={image} alt=""  />
        <p>{title}</p>
      </div>
      <p>{price}.00</p>
      <p>
      {/* <strong onClick={()=>decrese()}  style={{padding:"9px",cursor:"pointer"}}> <FaMinus /> </strong> */}
      <strong> ( {amount} ) </strong>
      {/* <strong onClick={()=> increase()}  style={{paddingLeft:"6px",cursor:"pointer"}}><FaPlus/></strong> */}
      </p>
      <p>{price*amount}</p>
      <p><MdDeleteForever onClick={()=> dispatch(removeItem(id)) } className='removeCart'/></p>
      </div>
 

    </>
  )
}

export default CartItem
