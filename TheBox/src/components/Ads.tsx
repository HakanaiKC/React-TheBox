import { Button, Col, Container, Row } from "react-bootstrap";
import "../styles/ads.scss";

function Ads() {
  return (
    <Container fluid id="ads">
      <Row className="align-items-center p-xxl-5 p-xl-5 p-lg-5 p-md-5 p-sm-2 p-4">
        <Col lg={8} md={7}>
          <h1 className="text-white fw-bold">
            Free consultation with exceptional quality
          </h1>
          <p className="text-white mt-4">
            Just one call away:{" "}
            <a href="#" className="text-white">
              +84 1102 2703
            </a>
          </p>
        </Col>
        <Col lg={4} md={5} className="text-center">
          <Button className="ads__button mt-xxl-0 mt-xl-0 mt-lg-0 mt-md-0 mt-sm-3 mt-3" variant="outline-light" size="lg">Get your consultation</Button>
        </Col>
      </Row>
      </Container>
  );
}

export default Ads;
