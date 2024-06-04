import React from 'react'
import { Col, Container, Row } from "react-bootstrap"
import { FaHandRock ,FaHandHoldingHeart,FaGift,FaHeart,FaHotTub,FaHeadset} from "react-icons/fa";
const About = () => {
  return (
    <>
      <Container fluid className='aboutbackground'>
        <Row>
          <Col>
            <div className="aboutcontainer">
              <img src="./images/about1.webp" alt="Avatar" className="aboutimage" width="500px"/>
              <div className="overlay">
                <div className="text">
                <FaHandRock /> Welcome to your own...... " <FaHotTub /> Your Store <FaGift />" Wish You a happpy Shopping Journey with us ! We are very happy to you connect with us...<FaHeart /> 
                </div>
              </div>
            </div>
          </Col>
          <Col>
          <div className="aboutcontainer">
              <img src="./images/about4.webp" alt="Avatar" className="aboutimage" width="500px"/>
              <div className="overlay">
                <div className="text"><FaHandHoldingHeart /> Hello EveryOne.... This is your new family shooping partner with 24 hours Customer Supports...<FaHeadset />...
                 may help you to save Money ,Time and believe for forever...Please Try Once! <FaHandRock /> <FaHandHoldingHeart /> 
                 </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default About
