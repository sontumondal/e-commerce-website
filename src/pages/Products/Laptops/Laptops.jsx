import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { laptopssData } from '../../../features/groceriesSlice'
import { Container,Row,Col } from 'react-bootstrap'
import LaptopDetails from './LaptopDetails'

const Laptops = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(laptopssData())
  },[])
  const {laptop,isLoading,isError}=useSelector(state => state.groceriesApp)
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
          {laptop.products && laptop.products.map((item)=>(
          <LaptopDetails key={item.id} {...item}/>
          ))}
          </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Laptops
