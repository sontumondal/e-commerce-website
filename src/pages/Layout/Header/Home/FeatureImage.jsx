import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEcommerceData } from '../../../../features/appSlice'
import { Col, Container, Row } from 'react-bootstrap'
import FeatureImageDetails from './FeatureImageDetails'
import { laptopssData } from '../../../../features/groceriesSlice'

const FeatureImage = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getEcommerceData())
    },[])

    useEffect(()=>{
        dispatch(laptopssData())
    },[])
  const {eProducts}=useSelector(state => state.app)
  const{laptop}=useSelector(state => state.groceriesApp)

  return (
    <>
       <Container fluid className='bg-dark'>
        <Row>
          <Col >
          
          <div className="smartphone">
          {eProducts.products && eProducts.products.slice(0,4).map((item)=>(
          <FeatureImageDetails key={item.id} {...item}/>
          ))}
          </div>
          </Col>
          <Col >
          
          <div className="smartphone">
          {laptop?.products && laptop?.products?.slice(0,4).map((item)=>(
          <FeatureImageDetails key={item.id} {...item}/>
          ))}
          </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FeatureImage
