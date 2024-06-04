import React, { memo, useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getEcommerceData } from '../../../features/appSlice'
import { Card, Col, Container, Row } from 'react-bootstrap'

import Smartphonedetails from './Smartphonedetails'
const Smartphones = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getEcommerceData())
  },[])
  const {eProducts,isLoading,isError}=useSelector(state => state.app)
  useEffect(()=>{
    document.title=isLoading ? "Loading..." : "Your-Store";
  },[isLoading])

  return (
    <>
      <Container>
        <Row>
        {isLoading && (<strong style={{fontSize:"1rem",color:"white"}}>Loading...</strong>)}
            {isError && (<strong style={{fontSize:"1rem",color:"white"}}>Check your connection</strong>)}

          <Col >
          
          <div className="smartphone">
          {eProducts.products && eProducts.products.map((item)=>(
          <Smartphonedetails key={item.id} {...item}/>
          ))}
          </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default memo(Smartphones)
