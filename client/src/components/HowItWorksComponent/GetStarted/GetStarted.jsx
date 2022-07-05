import React from 'react';
import { Button } from "react-bootstrap";
import styles from "./GetStarted.module.sass";

const GetStarted = () => {
  return (
    <div className={styles.font}>
      <div className={styles.gradientPrimary}>
        <div className={styles.textInfo}>
          <h3 className="h2 mb-2" style={{color: "#00dffc"}}>
            Ready to get started?
          </h3>
         
          <p className="h5 text-white mb-3 mt-3" style={{fontWeight: "500"}}>
            Fill out your contest brief and begin receiving custom name
            suggestions within minutes.
          </p>
          
          <Button variant="outline-*">Start A Contest</Button>
        </div>
        <div
              class="vr"
              style={{ height: "65px", transform: "rotate(15deg)", position: "absolute",
              marginLeft: "-190px", marginTop:"80px"}}
            ></div>
        <div
              class="vr"
              style={{ height: "65px", transform: "rotate(15deg)", position: "absolute",
              marginLeft: "200px", marginTop:"80px"}}
        ></div>
      
      </div>
    </div>
  );
}

export default GetStarted;
