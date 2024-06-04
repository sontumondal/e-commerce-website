import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { groceriesData } from '../../../features/groceriesSlice'
import { Container ,Row,Col} from 'react-bootstrap'
import GroceriesDetails from './GroceriesDetails'

const Groceries = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(groceriesData())
  },[])
  const {groceries,isLoading,isError}=useSelector(state => state.groceriesApp)
  // console.log(groceries);
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
          {groceries.products && groceries.products.map((item)=>(
          <GroceriesDetails key={item.id} {...item}/> 
          ))}
          </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Groceries
