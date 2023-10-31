import { Col, Form, Row } from "react-bootstrap";
import "../styles/cta.scss";

function Cta() {
  return (
    <div className="wrapper p-5" id="cta">
      <h2 className="fw-bold cta__heading text-center">
        What can us do for you?
      </h2>
      <p className="cta__description text-center">
        We are ready to work on a project of any complexity, whether it’s
        commercial or residential.
      </p>
      <Form className="form">
        <Row>
          <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <Form.Label>
              Name <span className="red">*</span>
            </Form.Label>
            <Form.Control required type="text" placeholder="Your Name" />
          </Col>
          <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <Form.Label>
              Email <span className="red">*</span>
            </Form.Label>
            <Form.Control required type="email" placeholder="Email" />
          </Col>
        </Row>

        <Row className="mt-3">
          <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <Form.Label>
              Reason for Contacting <span className="red">*</span>
            </Form.Label>
            <Form.Select>
              <option>Choose a reason</option>
              <option value="business">Business</option>
              <option value="business">Rent</option>
              <option value="business">Commerical</option>
              <option value="business">Residental</option>
            </Form.Select>
          </Col>
          <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="phone"
              placeholder="Phone"
              className="form__phone"
            />
          </Col>
          <Form.Group className="mt-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as={"textarea"}
              rows={5}
              type="text"
              placeholder="Message"
            />
          </Form.Group>
          <p className="form__required">
            <span className="red">*</span> indicates a required field
          </p>
          <div className="button text-center">
            <button className="form__button mt-3 p-2 fw-bold text-white text-center">
              Submit
            </button>
          </div>
        </Row>
      </Form>
    </div>
  );
}

export default Cta;
