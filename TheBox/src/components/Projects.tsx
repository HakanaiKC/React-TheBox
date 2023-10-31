import { Col, Container, Nav, Row, Tab, TabPane } from "react-bootstrap";
import "../styles/projects.scss";
import firstImg from "../assets/unsplash_T0iFfJw-rB0.png";
import secondImg from "../assets/unsplash_8oRCwrBn_Fc.png";
import fourthImg from "../assets/unsplash_gMes5dNykus.png";
import thirdImg from "../assets/unsplash_UV81E0oXXWQ.png";
import { Icon } from "@iconify/react/dist/iconify.js";

function Item({
  title,
  des,
  img,
}: {
  title: string;
  des: string;
  img: string;
}) {
  return (
    <Col
      xxl={6}
      xl={6}
      lg={6}
      md={6}
      sm={12}
      xs={12}
      className="content__item p-2"
    >
      <img src={img} alt="Lorem picsum" width={"100%"} />
      <div className="description p-2">
        <strong className="text-white">{title}</strong>
        <p className="mt-2 text-white mb-1">{des}</p>
      </div>
    </Col>
  );
}

export default function Projects() {
  return (
    <Container id="projects" className="my-5 p-3">
      <h1 className="fw-bold">Projects</h1>
      <Tab.Container defaultActiveKey={"first"}>
        <Row className="mt-4">
          <Col sm={4}>
            <Nav className="flex-column">
              <Nav.Link eventKey={"first"}>All</Nav.Link>
            </Nav>
            <Nav className="flex-column">
              <Nav.Link eventKey={"second"}>Commercial</Nav.Link>
            </Nav>
            <Nav className="flex-column">
              <Nav.Link eventKey={"third"}>Residential</Nav.Link>
            </Nav>
            <Nav className="flex-column">
              <Nav.Link eventKey={"forth"}>Other</Nav.Link>
            </Nav>
          </Col>
          <Col sm={8} className="content">
            <Tab.Content>
              <TabPane eventKey={"first"}>
                <Row>
                  <Item
                    img={firstImg}
                    title={"Wildstone Infra Hotel"}
                    des={"2715 Ash Dr. San Jose, South Dakota"}
                  />
                  <Item
                    img={secondImg}
                    title={"Wish Stone Building"}
                    des={"2972 Westheimer Rd. Santa Ana, Illinois "}
                  />
                </Row>
                <Row className="mt-1">
                  <Item
                    img={thirdImg}
                    title={"Mr. Parkinston’s House"}
                    des={"3517 W. Gray St. Utica, Pennsylvania"}
                  />
                  <Item
                    img={fourthImg}
                    title={"Oregano Height"}
                    des={"2464 Royal Ln. Mesa, New Jersey "}
                  />
                </Row>
                <div className="pagination d-flex justify-content-between mt-3 align-items-center">
                  <button className="pagination__left w-25 text-white p-xxl-3 p-xl-3 p-lg-3 p-md-2 p-2">
                    <Icon className="mx-2" icon="maki:arrow" rotate={2} />
                    Back
                  </button>
                  <div className="circle active"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <button className="pagination__right w-25 text-white p-xxl-3 p-xl-3 p-lg-3 p-md-2 p-2">
                    Next
                    <Icon className="ms-2" icon="maki:arrow" />
                  </button>
                </div>
              </TabPane>
              <TabPane eventKey={"second"}>Commercial</TabPane>
              <TabPane eventKey={"third"}>Residential</TabPane>
              <TabPane eventKey={"forth"}>Other</TabPane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}
