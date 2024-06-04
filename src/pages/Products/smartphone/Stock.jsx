import React, { useState } from 'react'
import { FaMinus ,FaPlus} from 'react-icons/fa';
import AddtoCart from './AddtoCart';

const Stock = ({product}) => {
const {stock}=product;

    const [amount,setAmount]=useState(1)
   
    const decrese=()=>{
      amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }
    const increase=()=>{
      amount < stock ? setAmount(amount + 1) : setAmount(stock)
    }
  return (
    <>
      <p>
      <strong onClick={()=>decrese()}  style={{padding:"9px",cursor:"pointer"}}> <FaMinus /> </strong>
      <strong> {amount} </strong>
      <strong onClick={()=> increase()}  style={{paddingLeft:"6px",cursor:"pointer"}}><FaPlus/></strong>
      <AddtoCart product={{product,amount}}/>
      </p>
    </>
  )
}

export default Stock
