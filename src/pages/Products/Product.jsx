import React from 'react'
import { Col, Container, Row,Navbar,Nav } from "react-bootstrap"
import { NavLink, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <>
     
      <Container fluid   className='product-container'>
        <Row className='pt-5'>
            <Col className='mt-3 ' >
            <Navbar  variant='dark' expand="md" >
                <Container >
                   
                    <Navbar.Toggle aria-controls='my-nav'/>
                    <Navbar.Collapse id="my-nav">
                    <Nav className="productnavlink" >
                    <NavLink to="smartphones" >SmartPhones</NavLink>
            <NavLink to="laptops">Laptops</NavLink>
             {/* skincare is deleted from server thatswhy sports */}
            <NavLink to="skincare">Sprots-Accessories</NavLink> 
            <NavLink to="fragrances">Fragrances</NavLink>
            <NavLink to="homedecoration">Home-Decoration</NavLink>
            <NavLink to="groceries">Groceries</NavLink>

                       
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </Col>
        </Row>
        <Row>
            <Outlet/>
        </Row>
    </Container>
    </>
  )
}

export default Product
