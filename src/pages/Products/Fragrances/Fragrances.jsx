import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fragranceData } from '../../../features/groceriesSlice'
import { Container,Row,Col } from 'react-bootstrap'
import FragrancesDetails from './FragrancesDetails'

const Fragrances = () => {
  const dispatch=useDispatch()
  useEffect(() =>{
    dispatch(fragranceData())
  },[])
  const {fragrances,isLoading,isError}=useSelector(state => state.groceriesApp)
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
          {fragrances.products && fragrances.products.map((item)=>(
          <FragrancesDetails key={item.id} {...item}/>
          ))}
          </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Fragrances
