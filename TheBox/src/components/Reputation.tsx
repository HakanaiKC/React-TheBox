import { Icon } from "@iconify/react/dist/iconify.js";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/reputation.scss";

function Item({
  title,
  content,
  icon,
}: {
  title: string;
  content: string;
  icon: any;
}) {
  return (
    <>
      {icon}
      <strong className="d-block my-2 fs-5">{title}</strong>
      <p>{content}</p>
    </>
  );
}

function Reputation() {
  return (
    <div id="reputation">
      <Container className="reputation p-4 my-5">
        <h1 className="reputation__header text-center fw-bold">
          Our Reputations
        </h1>
        <Row className="mt-5 reputation__row">
          <Col className="reputation__item mt-2 rounded p-lg-4 p-xl-4 p-xxl-4 p-md-2 mx-5 border">
            <Item
              title={"Best Services"}
              content={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem?"
              }
              icon={
                <Icon
                  className="reputation__icon"
                  width="40"
                  height="40"
                  icon="streamline:interface-help-customer-support-2-customer-headphones-headset-help-microphone-phone-person-support"
                />
              }
            />
          </Col>

          <Col className="reputation__item mt-2 rounded p-lg-4 p-xl-4 p-xxl-4 p-md-2 border">
            <Item
              title={"Best Teams"}
              content={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem?"
              }
              icon={
                <Icon
                  className="reputation__icon"
                  width="40"
                  height="40"
                  icon="streamline:interface-help-customer-support-2-customer-headphones-headset-help-microphone-phone-person-support"
                />
              }
            />
          </Col>

          <Col className="reputation__item mt-2 rounded p-lg-4 p-xl-4 p-xxl-4 p-md-2 mx-5 border">
            <Item
              title={"Best Designs"}
              content={
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem?"
              }
              icon={
                <Icon
                  className="reputation__icon"
                  width="40"
                  height="40"
                  icon="fa6-solid:pen-ruler"
                />
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Reputation;
