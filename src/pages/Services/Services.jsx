import React from "react";
import {
  Col,
  Container,
  Row,
  Card,
  Button,
  Image,
  CardGroup,
} from "react-bootstrap";
import {NavLink} from "react-router-dom"
const Services = () => {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundImage: "linear-gradient(black,gray,rgb(34, 34, 70),black)"}}
      >
        <br />
        <Row>
          <Container className="mt-5">
            <Row>
              <Col>
                <Card
                  className="m-4 cardhover "
                  style={{
                    width: "16rem",
                    boxShadow: "0px 0px 5px 5px violet",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="./images/delivery.webp"
                    height="200px"
                  />
                  <Card.Body>
                    <Card.Title>Free and Fast Home Delivery...</Card.Title>

                    <Button variant="outline-primary"><NavLink to="/product">Grab Now</NavLink></Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card
                  className="m-4 cardhover"
                  style={{
                    width: "16rem",
                    boxShadow: "0px 0px 5px 5px aquamarine",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="./images/moneyback.webp"
                    height="200px"
                  />
                  <Card.Body>
                    <Card.Title>100% Money Back Guarantee...</Card.Title>

                    <Button variant="outline-success"><NavLink to="/product">Grab Now</NavLink></Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card
                  className="m-4 cardhover"
                  style={{ width: "16rem", boxShadow: "0px 0px 5px 5px " }}
                >
                  <Card.Img
                    variant="top"
                    src="./images/securepayment.webp"
                    height="200px"
                  />
                  <Card.Body>
                    <Card.Title>Secure Payment Method...</Card.Title>

                    <Button variant="outline-dark"><NavLink to="/product">Grab Now</NavLink></Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card
                  className="m-4 cardhover"
                  style={{ width: "16rem", boxShadow: "0px 0px 5px 5px pink" }}
                >
                  <Card.Img
                    variant="top"
                    src="./images/noncontact.webp"
                    height="200px"
                  />
                  <Card.Body>
                    <Card.Title>Non Contact Payments...</Card.Title>

                    <Button variant="outline-warning"><NavLink to="/product">Grab Now</NavLink></Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Row>
        <Row className="m-4">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Trusted By 1000+ Companies</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Trusted By 1000+ Family Supports</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Image src="./images/supportcomapny.webp" height="250px" />
        </Row>
      </Container>
    </>
  );
};

export default Services;
