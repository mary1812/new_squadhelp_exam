import React, { useState, useEffect } from "react";
import { Button, Collapse } from "react-bootstrap";
import styles from "./QuestionBox.module.sass";
import sx from "classnames"

const QuestionBox = ({ dataForQuestionBox, index }) => {
  const [open, setOpen] = useState(false);
  
  const arrowClasses = sx({"fas fa-arrow-down small" : true, 'arrowOpen': !open, 'arrowClosed': open})

  useEffect(() => {
    if (index === 0) {
      setOpen(!open);
    }
  }, []);

  return (
    <div className={styles.qstnBox}>
      <div style={{ margin: "0px 0px 16px" }}>
        <Button
          className={`d-flex justify-content-between ${styles.btnQstnBox}`}
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          style={{borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px"}}
        >
          {" "}
          {dataForQuestionBox.question}{" "}
          <span className={arrowClasses}></span>
        </Button>
        <Collapse
          style={{ padding: "16px", border: "1px solid #e7eaf3", borderBottomRightRadius: "5px", borderBottomLeftRadius: "5px"}}
          in={open}
        >
          <div id="example-collapse-text">{dataForQuestionBox.answer}</div>
        </Collapse>
      </div>
    </div>
  );
};

export default QuestionBox;
