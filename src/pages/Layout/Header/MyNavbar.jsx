import React, { useEffect } from 'react'

import {Navbar,Container,Row,Col,Nav} from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'
import {NavLink} from "react-router-dom" 
import ProfileLogout from '../../auth/ProfileLogout'
import { login } from '../../../features/authSlice'

const MyNavbar = () => {
  const {cart}=useSelector(state => state.allcart)
  const {isLogin}=useSelector(state => state.authentication)
const dispatch=useDispatch()
useEffect(()=>{
  dispatch(login(localStorage.getItem("token")))
},[])
  return (
    <>
    <Container fluid >
        <Row >
            <Col  >
            <Navbar fixed='top' variant='dark' expand="lg" className='navbar'>
                <Container >
                    <Navbar.Brand className='nav-main-logo'>
                   <NavLink to="/home"> <img src="/images/logo.webp" alt="logo" className='nav-logo' />  </NavLink>  
                 
                 <p className="nav-heading">Your Store</p>              
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='my-nav'/>
                    <Navbar.Collapse id="my-nav">
                    {/* <Nav className='me-auto fw-bold  navbar-link' >
                        <NavLink to="/home" >home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        <NavLink to="/product">Product</NavLink>
                        <NavLink to="/search">Search</NavLink> 
                    </Nav> */}
                    {/* <Navbar.Text> */}
                      
                    {isLogin? (
                            <>

                      <Nav className='me-auto fw-bold  navbar-link' >
                        <NavLink to="/home" >home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        <NavLink to="/product">Product</NavLink>
                        <NavLink to="/search">Search</NavLink> 
                    </Nav>
                    <Navbar.Text>
                    <ProfileLogout/></Navbar.Text>  <Navbar.Text >
                      <NavLink to="/cart" > <button className='nav-cart-btn'>Cart:-{cart.length}</button></NavLink>
                    </Navbar.Text> </>
                    ):( 
                      
                      <NavLink to="/">
                           
                      <button className='nav-sign-btn'>Sign in</button>
                    </NavLink>)}

                      {/* {
                        localStorage.getItem("token") ? (<ProfileLogout/> ):( <NavLink to="/">
                      <button className='nav-sign-btn'>Sign in</button>
                    </NavLink>)
                      } */}
                      
                      
                     
                    {/* </Navbar.Text> */}
                   
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default MyNavbar
