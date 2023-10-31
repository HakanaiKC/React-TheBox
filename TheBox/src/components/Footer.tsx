import { Button, Col, Container, Form, Row } from "react-bootstrap";
import logo from "../assets/logoipsum-253.svg";
import { Icon } from "@iconify/react/dist/iconify.js";
import "../styles/footer.scss";

export default function Footer() {
  return (
    <>
      <Container className="p-xxl-5 p-xl-5 p-lg-5 p-md-5 p-4">
        <Row>
          <Col lg={6}>
            <Row className="left-info">
              <Col className="label" xxl={2} xl={2} lg={2} md={2} xs={4}>
                <p className="text-uppercase primary">Address:</p>
              </Col>
              <Col className="context" xxl={10} xl={10} lg={10} md={10} xs={8}>
                <p className="left-info__text">
                  6391 Elgin St. Celina, Delaware 10299
                </p>
              </Col>
            </Row>
            <Row className="left-info">
              <Col className="label" xxl={2} xl={2} lg={2} md={2} xs={4}>
                <p className="text-uppercase primary">phone:</p>
              </Col>
              <Col className="context" xxl={10} xl={10} lg={10} md={10} xs={8}>
                <p className="left-info__text">+96 9696 9696</p>
              </Col>
            </Row>
            <Row className="left-info">
              <Col className="label" xxl={2} xl={2} lg={2} md={2} xs={4}>
                <p className="text-uppercase primary">email:</p>
              </Col>
              <Col className="context" xxl={10} xl={10} lg={10} md={10} xs={8}>
                <p className="left-info__text">lorem@ipsum.com</p>
              </Col>
            </Row>
            <img
              src={logo}
              alt="Logo Ipsum"
              className="wide-screen-logo mt-xxl-4 mt-xl-4 mt-lg-4 mt-md-2"
            />
          </Col>

          <Col lg={6}>
            <div className="right-info">
              <p className="primary text-uppercase">newsletter:</p>
              <Form>
                <Form.Group className="right-info__form mb-3 d-flex">
                  <Form.Control
                    type="email"
                    placeholder="Your email here"
                    className="right-info__control me-3"
                  />
                  <Button
                    variant="warning"
                    type="submit"
                    className="right-info__button fw-bold text-white mt-xxl-0 mt-xl-0 mt-lg-0 mt-md-0"
                  >
                    Subscribe
                  </Button>
                </Form.Group>
              </Form>

              <p className="primary text-uppercase">social:</p>
              <Icon
                className="me-3"
                icon="akar-icons:facebook-fill"
                color="#3D445C"
                width="40"
                height="40"
              />
              <Icon
                className="me-3"
                icon="entypo-social:linkedin-with-circle"
                color="#3D445C"
                width="42"
                height="42"
              />
              <Icon
                icon="formkit:twitter"
                color="#3D445C"
                width="40"
                height="40"
              />
            </div>
          </Col>
        </Row>
        <img src={logo} alt="Logo Ipsum" className="small-screen-logo mt-4" />
      </Container>
      <footer style={{ backgroundColor: "#2947A9" }} className="p-3">
        <span className="text-white ms-xxl-5 ms-xl-5 ms-md-5 ms-lg-5 ms-0">
          Lorem Company © 2022. All Rights Reserved
        </span>
      </footer>
    </>
  );
}
