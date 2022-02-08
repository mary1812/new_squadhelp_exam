import React from "react";
import { Card, CardGroup, Button} from "react-bootstrap";
import CONSTANTS from "../../../constants";

const ServicesSection = () => {
  return (
    <div className="container">
      <div className="my-5 w-md-80 w-lg-80 text-center mx-md-auto mb-9">
        <small className="btn btn-xs btn-soft-primary btn-pill mb-2 disabled">
          Our Services
        </small>
        <h2 className="h2 fw-normal">3 Ways To Use Squadhelp</h2>
        <p>
          Squadhelp offers 3 ways to get you a perfect name for your business.
        </p>
      </div>

      <CardGroup className="text-center">
        <Card className="py-5">
          <img
            className="mx-auto"
            style={{ height: "100px", width: "100px" }}
            src={`${CONSTANTS.STATIC_IMAGES_PATH}leftCardPicture.png`}
            alt="left"
          />
          <Card.Body>
            <h4 className="h4 fw-normal">Launch a Contest</h4>
            <Card.Text className="mb-3">
              Work with hundreds of creative experts to get custom name
              suggestions for your business or brand. All names are auto-checked
              for URL availability.
            </Card.Text>
            <a className="btn btn-primary btn-wide transition-3d-hover" href="/">Launch a Contest</a>
          </Card.Body>
        </Card>

        <Card style={{ width: "22rem" }} className="py-5">
          <img
            className="mx-auto"
            style={{ height: "100px", width: "100px" }}
            src={`${CONSTANTS.STATIC_IMAGES_PATH}middleCardPicture.png`}
            alt="left"
          />
          <Card.Body>
            <h4 className="h4 fw-normal">Explore Names For Sale</h4>
            <Card.Text className="mb-3">
              Our branding team has curated thousands of pre-made names that you
              can purchase instantly. All names include a matching URL and a
              complimentary Logo Design
            </Card.Text>
            <a className="btn btn-primary btn-wide transition-3d-hover" href="/">Explore Names For Sale</a>
          </Card.Body>
        </Card>

        <Card className="py-5">
          <img
            className="mx-auto"
            style={{ height: "90px", width: "100px" }}
            src={`${CONSTANTS.STATIC_IMAGES_PATH}rightCardPicture.png`}
            alt="left"
          />
          <Card.Body>
            <h4 className="h4 fw-normal">Agency-level Managed Contests</h4>
            <Card.Text className="mb-3">
              Our Managed contests combine the power of crowdsourcing with the
              rich experience of our branding consultants. Get a complete
              agency-level experience at a fraction of Agency costs
            </Card.Text>
            <a className="btn btn-primary btn-wide transition-3d-hover" href="/">Learn More</a>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default ServicesSection;

{
  /* <div className="card-deck card-sm-gutters-3 d-block d-md-flex">
        <div className="card text-center mb-4 mb-md-0">
          <div  className="card-body space-2 px-3">
            <div className="mb-4">
              <img
                src={`${CONSTANTS.STATIC_IMAGES_PATH}leftCardPicture.png`}
                alt="Smartphone"
              />
              <h4 className="h4 ">Launch a Contest</h4>
              <p className="mb-3">
                Work with hundreds of creative experts to get custom name
                suggestions for your business or brand. All names are
                auto-checked for URL availability.
              </p>
            </div>
            <a
              className="btn btn-primary btn-wide transition-3d-hover"
              href="/"
            >
              Launch a contest
            </a>
          </div>
        </div>
        



        <div className=" container card text-center mb-4 mx-3 mb-md-0">
          <div className="card-body space-2 px-3">
            <div className="mb-4">
              {" "}
              <img
                src={`${CONSTANTS.STATIC_IMAGES_PATH}middleCardPicture.png`}
                alt="Smartphone"
              />
              <h4 className="h4">Explore Names For Sale</h4>
              <p className="mb-3">
                Our branding team has curated thousands of pre-made names that
                you can purchase instantly. All names include a matching URL and
                a complimentary Logo Design
              </p>
              <a
                className="btn btn-primary btn-wide transition-3d-hover"
                href="/"
              >
                Launch a contest
              </a>
            </div>
          </div>
        </div>

        <div className=" container card text-center mb-4 mx-3 mb-md-0">
          <div className="card-body space-2 px-3">
            <div className="mb-4">
              {" "}
              <img
                src={`${CONSTANTS.STATIC_IMAGES_PATH}rightCardPicture.png`}
                alt="Smartphone"
              />
              <h4 className="h4">Agency-level Managed Contests</h4>
              <p className="mb-3">
                Our Managed contests combine the power of crowdsourcing with the
                rich experience of our branding consultants. Get a complete
                agency-level experience at a fraction of Agency costs
              </p>
              <a
                className="btn btn-primary btn-wide transition-3d-hover"
                href="/"
              >
                Launch a contest
              </a>
            </div>
          </div>
        </div>
        </div>
      </div> */
}
