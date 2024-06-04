import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Image, InputGroup, Row } from "react-bootstrap"
import { BsBrush,BsChatSquareQuoteFill } from "react-icons/bs";
import Swal from 'sweetalert2';

const Contact = () => {
  const [contactData,setContactData]=useState({
    userid:"",
    email:"",
    text:""
  })
const handlecontactform=(e)=>{
  e.preventDefault()
  if(!contactData.length){
    alert("please fill the contact form")
  }else{
    Swal.fire({
      title:"for submitting valuable feedback !",
      width: 550,
      color: "black",
     backgroundColor:"black",
      background: " url(/images/thanks.webp) ",
   
      backdrop: `
        rgba(20,20,23,0.4)
         url("/images/logo.webp")
        left top
        no-repeat
      `
    });

  }
  setContactData({
    userid:"",
    email:"",
    text:""
  })
  
}
  return (
    <>
    <Container fluid style={{background:"gray"}}>
    
       
        <Row className='mt-5'>
            <Col>
            
            <Card className='mt-5' style={{boxShadow:"0px 0px 5px 2px gray"}}>
                <Card.Title className='m-auto'>
                    We are very Plessure to Contact with You... <BsBrush />... Make Sure Fill the Contact Feild and also Feedback <BsChatSquareQuoteFill />
                </Card.Title>
            </Card>
            </Col>
            
        </Row>
        <Row>
            <Col className='m-3' style={{boxShadow:"0px 0px 5px 2px gray"}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58956.0420102018!2d88.3720192!3d22.5509376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1710855237538!5m2!1sen!2sin" width="100%" height="300" style={{border:0}}
            allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Col>
        </Row>
      
        <Row className='m-auto' style={{width:"50%"}}>
            <h4 style={{textShadow:"2px 2px blue"}}>Contact Page :-</h4>
        <Form onSubmit={handlecontactform} >
       
      <Form.Group className="mb-3" >
      <Form.Label>Name : </Form.Label>
        <Form.Control type="text" placeholder="Name..." value={contactData.userid}  onChange={(e)=> setContactData(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
      <Form.Label>Email address : </Form.Label>

        <Form.Control type="email" placeholder="name@example.com" value={contactData.email}  onChange={(e)=> setContactData(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
      <Form.Label>Comments : </Form.Label>

        <Form.Control as="textarea" rows={3} placeholder='type your valuable Feedback' value={contactData.text} onChange={(e)=> setContactData(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Button type='submit'>Submit</Button>
      </Form.Group>

    </Form>
        </Row>
    </Container>
    </>
  )
}

export default Contact
