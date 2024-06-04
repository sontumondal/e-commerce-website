import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { homeDecorationData } from '../../../features/groceriesSlice'
import { Container,Row,Col } from 'react-bootstrap'
import HomeDecorationDetails from './HomeDecorationDetails'

const HomeDecoration = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(homeDecorationData())
  },[])
  const {homeDecoration,isLoading,isError}=useSelector(state => state.groceriesApp)
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
          {homeDecoration.products && homeDecoration.products.map((item)=>(
          <HomeDecorationDetails key={item.id} {...item}/>
          ))}
          </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HomeDecoration
