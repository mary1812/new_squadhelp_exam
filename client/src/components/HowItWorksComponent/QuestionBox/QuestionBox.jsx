import React, { useState, useEffect } from 'react';
import { Button, Collapse } from "react-bootstrap";
import styles from "./QuestionBox.module.sass"

const QuestionBox = ({ dataForQuestionBox, index }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if(index === 0){
      setOpen(!open)
    }
  }, []);

  return (
    <div style={{ margin: "0px 0px 16px" }}>
      <Button
        style={{
          color: "#1E2022",
          backgroundColor: "transparent",
          border: "1px solid #e7eaf3",
          display: "flex",
          padding: "16px",
          width: "100%",
        }}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        {" "}
        {dataForQuestionBox.question}{" "}
      </Button>
      <Collapse
        style={{ padding: "16px", border: "1px solid #e7eaf3" }}
        in={open}
      >
        <div id="example-collapse-text">{dataForQuestionBox.answer}</div>
      </Collapse>
    </div>
  );
};

export default QuestionBox;
