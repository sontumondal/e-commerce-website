import React from 'react'

import { Col, Container, Row,Carousel } from 'react-bootstrap'

const ImagesSlider = () => {
  return (
    <>
      <Container fluid >
        <Row>
            <Col>
            <Carousel  >
                <Carousel.Item interval="1000">
                    <img src='/images/poster1.webp' width="100%" height="400px"  className='d-block w-100'/>
                    <Carousel.Caption>
                      <h3><i>WELCOME TO YOUR STORE</i></h3>
                      <p>GET PRODUCT UPTO 20% OFF</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval="1000">
                    <img src='/images/poster3.webp' width="100%" height="400px"/>
                    <Carousel.Caption>
                    <h3><i>WELCOME TO YOUR STORE</i></h3>
                          <p>HELLO NATURE "We can never have enough of nature." –Henry David Thoreau.
                    "If you truly love nature, you will find beauty everywhere." –Laura Ingalls Wilder.
                    "May your trails be crooked, winding, lonesome, dangerous, leading to the most amazing view.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval="1000">
                    <img src='/images/c3.webp' width="100%" height="400px"/>
                    <Carousel.Caption>
                    <h3><i>WELCOME TO YOUR STORE</i></h3>
                      <p>GET PRODUCT UPTO 20% OFF</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval="1000">
                    <img src='/images/c4.webp' width="100%" height="400px"/>
                    <Carousel.Caption>
                    <h3><i>WELCOME TO YOUR STORE</i></h3>
                      <p>GET PRODUCT UPTO 20% OFF</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval="1000">
                    <img src='/images/c5.webp' width="100%" height="400px"/>
                    <Carousel.Caption>
                    <h3><i>WELCOME TO YOUR STORE</i></h3>
                      <p>GET PRODUCT UPTO 20% OFF</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval="1000">
                    <img src='/images/poster4.webp ' width="100%" height="400px"/>
                    <Carousel.Caption>
                    <h3><i>WELCOME TO YOUR STORE</i></h3>
                          <p>HELLO NATURE "We can never have enough of nature." –Henry David Thoreau.
                    "If you truly love nature, you will find beauty everywhere." –Laura Ingalls Wilder.
                    "May your trails be crooked, winding, lonesome, dangerous, leading to the most amazing view.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval="1000">
                    <img src='/images/poster2.webp' width="100%" height="400px"/>
                    <Carousel.Caption>
                    <h3><i>WELCOME TO YOUR STORE</i></h3>
                      <p>GET PRODUCT UPTO 20% OFF</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval="1000">
                    <img src='/images/c8.webp' width="100%" height="400px"/>
                    <Carousel.Caption>
                    <h3><i>WELCOME TO YOUR STORE</i></h3>
                      <p>GET PRODUCT UPTO 20% OFF</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval="1000">
                    <img src='/images/c9.webp' width="100%" height="400px"/>
                    <Carousel.Caption>
                    <h3><i>WELCOME TO YOUR STORE</i></h3>
                      <p>GET PRODUCT UPTO 20% OFF</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval="1000">
                    <img src='/images/c10.webp' width="100%" height="400px"/>
                    <Carousel.Caption>
                    <h3><i>WELCOME TO YOUR STORE</i></h3>
                      <p>GET PRODUCT UPTO 20% OFF</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
                </Col>
        </Row>
      </Container>
    </>
  )
}

export default ImagesSlider;
