import React from 'react'
import { GiConfirmed } from "react-icons/gi";
import { FaPrayingHands } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
const Payment = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="payment">
        <div className="payment-details">
          <p><GiConfirmed style={{ color: "green", fontSize: "4rem" }} /> Order Confirm</p>
          <p> <CiDeliveryTruck style={{ color: "yellow", fontSize: "4rem" }} /> Your Delivery will be reached at your address within the times <CiDeliveryTruck style={{ color: "blue", fontSize: "4rem" }} /></p>
          <p><FaPrayingHands style={{ color: "gray", fontSize: "4rem" }} /> Thank You</p>
        </div>
        <p onClick={() => navigate(-1)} style={{ cursor: "progress" }}>back</p>
      </div>
    </>
  )
}

export default Payment
