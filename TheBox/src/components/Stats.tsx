import { Button, Col, Container, Row } from "react-bootstrap";
import "../styles/stats.scss";
import happy from "../assets/happy.png";
import business from "../assets/business.png";
import trofy from "../assets/trofy.png";
import project from "../assets/project.png";

function Stats() {
  return (
    <Container className="p-5" id="stats">
      <Row className="align-items-center">
        <Col
          lg={8}
          className="left d-flex flex-column justify-content-center align-items-center"
        >
          <div className="happy bg-white border shadow rounded ps-4">
            <img src={happy} alt="Happy" className="happy_img" />
            <p className="number fw-bold">84</p>
            <p className="stats__description ms-4">Happy Clients</p>
          </div>
          <div className="projects bg-white border shadow rounded ps-4">
            <img src={project} alt="project" className="project_img" />
            <p className="number fw-bold">123</p>
            <p className="stats__description ms-4">Projects Completed</p>
          </div>
          <div className="awards bg-white border shadow rounded ps-4">
            <img src={trofy} alt="trofy" className="trofy_img" />
            <p className="number fw-bold">37</p>
            <p className="stats__description ms-4">Awards Win</p>
          </div>
          <div className="years bg-white border shadow rounded ps-4">
            <img src={business} alt="business" className="business_img" />
            <p className="number fw-bold">30</p>
            <p className="stats__description ms-4">Years in Business</p>
          </div>
        </Col>

        <Col className="right" lg={4}>
          <h2 className="right__heading fw-bold mb-4">30 Years Experience</h2>
          <p>
            Our company has been the leading provided construction services to
            clients throughout the USA since 1988.
          </p>
          <Button className="right__button p-2 mt-4">Contact us</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Stats;
