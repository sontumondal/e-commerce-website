import React, { memo, useEffect, useState } from "react";
// import { FaMinus ,FaPlus} from 'react-icons/fa';
import { Button } from "react-bootstrap";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtocartdata } from "../../../features/cartSlice";
import { getSingleSmartphoneData } from "../../../features/appSlice";

const AddtoCart = ({ product, amount }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const handleBuy = useEffect(() => {
    dispatch(getSingleSmartphoneData(`https://dummyjson.com/products/${id}`));
  }, []);
  // const { singleSmartphoneData } = useSelector(state => state.app)

  return (
    <>
      <div>
        <NavLink
          to="/cart"
          onClick={() => dispatch(addtocartdata(product, amount))}
        >
          <Button variant="outline-success" className="mt-2">
            Add To Cart
          </Button>
        </NavLink>
        <NavLink to="/buynow" onClick={handleBuy}>
          <Button variant="outline-primary" className="mt-2 ms-2">
            Buy Now
          </Button>
        </NavLink>
        <Button
          variant="outline-secondary"
          className="mt-2 ms-2 "
          onClick={(e) => navigate(-1)}
        >
          Back
        </Button>
      </div>
    </>
  );
};

export default memo(AddtoCart);
