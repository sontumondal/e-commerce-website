import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { skincareData } from '../../../features/groceriesSlice'
import { Container,Row,Col } from 'react-bootstrap'
import SkinCaresDetails from './SkinCaresDetails'

const Skincare = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(skincareData())
  },[])
  const {skincares,isLoading,isError}=useSelector(state => state.groceriesApp)
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
          {skincares?.products && skincares?.products?.map((item)=>(
          <SkinCaresDetails key={item.id} {...item}/>
          ))}
          </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Skincare
