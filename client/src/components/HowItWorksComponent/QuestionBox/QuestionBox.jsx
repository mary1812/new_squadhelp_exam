import React, { useState, useEffect } from "react";
import { Button, Collapse } from "react-bootstrap";
import styles from "./QuestionBox.module.sass";

const QuestionBox = ({ dataForQuestionBox, index }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (index === 0) {
      setOpen(!open);
    }
  }, []);

  return (
    <div className={styles.qstnBox}>
      <div style={{ margin: "0px 0px 16px"}}>
        <Button
         className="d-flex justify-content-between"
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          {" "}
          {dataForQuestionBox.question}{" "}
          <span className="fas fa-arrow-down small"></span>
        </Button>
        <Collapse
          style={{ padding: "16px", border: "1px solid #e7eaf3" }}
          in={open}
        >
          <div id="example-collapse-text">{dataForQuestionBox.answer}</div>
        </Collapse>
      </div>
    </div>
  );
};

export default QuestionBox;
