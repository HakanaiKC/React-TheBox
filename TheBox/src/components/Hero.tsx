import hero from "../assets/Hero.png";
import { Icon } from "@iconify/react";
import { Image } from "react-bootstrap";
import "../styles/hero.scss";

function Hero() {
  return (
    <div id="hero">
      <div className="hero">
        <Image src={hero} alt="Background" width={"100%"} />
      </div>
      <div className="featurePj text-center">
        <div className="description p-4">
          <strong className="description__header text-white">Feature Project</strong>
          <p className="description__des mt-3 text-white">
            The National University of Architecture
          </p>
        </div>
        <div className="buttons">
          <button className="buttons__left w-50 text-white p-2">
            <Icon className="mx-2" icon="maki:arrow" rotate={2} />
            Back
          </button>
          <button className="buttons__right w-50 text-white p-2">
            Next
            <Icon className="ms-2" icon="maki:arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
