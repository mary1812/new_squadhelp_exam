import React from 'react';
import { useState } from 'react';
import QuestionBox from '../QuestionBox/QuestionBox';

const QuestionContainer = ({dataForQuestionBoxArray, header}) => {
  
  return (
    <div className="questionContainerBox" >
      <h3 className="h3 text-primary">{header}</h3>
      {dataForQuestionBoxArray.map((dataForQuestionBox, index)=>
        <QuestionBox key={dataForQuestionBox.question} dataForQuestionBox={dataForQuestionBox} index={index} />
      )}
    </div>
  );
}
export default QuestionContainer;
