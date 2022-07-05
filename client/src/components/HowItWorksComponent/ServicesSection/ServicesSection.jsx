import React from "react";
import styles from "./ServicesSection.module.sass"
import { Card,  Button} from "react-bootstrap";
import CONSTANTS from "../../../constants";

const ServicesSection = () => {
  return (
    <div className={styles.btnCard}>
      <div className="my-5 w-md-80 w-lg-80 text-center mx-md-auto mb-9">
        <small className="btn btn-xs btn-soft-primary btn-pill mb-2 pe-none">
          Our Services
        </small>
        <h2 className="h2 fw-normal">3 Ways To Use Squadhelp</h2>
        <p>
          Squadhelp offers 3 ways to get you a perfect name for your business.
        </p>
      </div>

      <div>
        <div className={styles.cardsSection}>
        <Card style={{ width: "350px"}} className="py-5">
          <Card.Img
            className="mx-auto"
            style={{ height: "100px", width: "100px" }}
            src={`${CONSTANTS.STATIC_IMAGES_PATH}leftCardPicture.png`}
          />
          <Card.Body >
            <h3 className="h4 fw-normal">Launch a Contest</h3>
            <Card.Text className="mb-4">
              Work with hundreds of creative experts to get custom name
              suggestions for your business or brand. All names are auto-checked
              for URL availability.
            </Card.Text>
            <Button variant="primary" >Launch a Contest</Button>
          </Card.Body >
        </Card>
        <Card style={{ width: "350px" }}  className="py-5">
          <Card.Img
            className="mx-auto"
            style={{ height: "100px", width: "100px" }}
            src={`${CONSTANTS.STATIC_IMAGES_PATH}middleCardPicture.png`}
          />
          <Card.Body>
            <h3 className="h4 fw-normal">Explore Names For Sale</h3>
            <Card.Text className="mb-4">
            Our branding team has curated thousands of pre-made names that you can purchase instantly. All names include a matching URL and a complimentary Logo Design
            </Card.Text>
            <Button variant="primary">Explore Names For Sale</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "350px" }}  className="py-5">
          <Card.Img
            className="mx-auto"
            style={{ height: "90px", width: "100px" }}
            src={`${CONSTANTS.STATIC_IMAGES_PATH}rightCardPicture.png`}
          />
          <Card.Body >
            <h3 className="h4 fw-normal">Agency-level Managed Contests</h3>
            <Card.Text className="mb-4">
            Our Managed contests combine the power of crowdsourcing with the rich experience of our branding consultants. Get a complete agency-level experience at a fraction of Agency costs
            </Card.Text>
            <Button variant="primary">Learn More</Button>
          </Card.Body>
        </Card>
        </div>
      </div>

      
    </div>
  );
};

export default ServicesSection;


