import { Button, Image } from "react-bootstrap";
import oldman from "../assets/oldman.png";
import '../styles/about.scss'

function About() {
  return (
    <div id="about" className="p-xxl-5 p-xl-5 p-lg-4 p-md-3 p-sm-0">
      <Image className="founder_img" src={oldman} alt="Founder"/>
      <div className="frame p-xxl-5 p-xl-5 p-lg-4 p-md-3 p-sm-2 p-3 me-xxl-5 me-xl-5 me-lg-4">
        <h2 className="frame__heading fw-bold text-white">About us</h2>
        <p className="frame__des mt-4 text-white">
          For more than 30 years we have been delivering world-class
          construction and we’ve built many lasting relationships along the way.
        </p>
        <p className="frame__des text-white">
          We’ve matured into an industry leader and trusted resource for those
          seeking quality, innovation and reliability when building in the U.S.
        </p>
        <Button className="px-4 mt-xxl-5 mt-xl-5 mt-lg-5 mt-md-2 mt-sm-2 fw-bold" variant="light">More on Our History</Button>
      </div>
    </div>
  );
}

export default About;
